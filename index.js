( function ( $, L, oboe, FileReadStream, prettySize ) {
	var map;
	var heat;
	var data =[];
	var date = new Date();
	var filterStruct = {
							startDate:new Date("1979-12-31"), 
							endDate: date,
							startTime: "00:00",
							endTime: "23:59"
						}
	// Start at the beginning
	stageOne();

	////// STAGE 1 - ZE VELCOME UNT ZE UPLOAD //////
	function between(time, startTime, endTime)
	{
		start = new Date(Date.parse(time.toDateString() + " " + startTime));
		end= new Date(Date.parse(time.toDateString() + " " + endTime));
		return time >start && time < end;
	}
	function update()
	{
		dataActive = data.filter(function(element)
		{
			date = element[0] > filterStruct.startDate && element[0] < filterStruct.endDate;
			hours = between(element[0], filterStruct.startTime, filterStruct.endTime);
			return date && hours;
		});
		heat._latlngs = dataActive.map(function(element){return element.slice(1)});
		heat.redraw();
	}
	function stageOne () {
		var dropzone;

		// Add ability to change max value
		$("#heatRangeId").change(function(e){
			var maxValue = Number($("#heatRangeId").val());
			heat.setOptions({blur:20, max:maxValue});
		});
		
		$("#startDate").change(function(e){
			var value = $("#startDate").val();
			filterStruct.startDate = new Date(value);
		});
		
		$("#endDate").change(function(e){
			var value = $("#endDate").val();
			filterStruct.endDate= new Date(value);
		});
		
		$("#startTime").change(function(e){
			var value = $("#startTime").val();
			filterStruct.startTime= value;
		});
		
		$("#endTime").change(function(e){
			var value = $("#endTime").val();
			filterStruct.endTime= value;
		});
		$(".updateable").change(function(e)
		{
			update();
		});
		
	
		// Initialize the map
		map = L.map( 'map' ).setView([0,0], 2);
		L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'location-history-visualizer is open source and available <a href="https://github.com/theopolisme/location-history-visualizer">on GitHub</a>. Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.',
			maxZoom: 18
		} ).addTo( map );

		// Initialize the dropzone
		dropzone = new Dropzone( document.body, {
			url: '/',
			previewsContainer: '#null',
			clickable: false,
			accept: function ( file, done ) {
				stageTwo( file );
				dropzone.disable(); // Your job is done, buddy
			}
		} );

		// For mobile browsers, allow direct file selection as well
		$( '#file' ).change( function () {
			stageTwo( this.files[0] );
			dropzone.disable();
		} );
	}

	////// STAGE 2 - ZE PROCESSING //////

	function stageTwo ( file ) {
		heat = L.heatLayer( [], {
				blur: 20,
				max: 5.0
 			} ).addTo( map ),
			SCALAR_E7 = 0.0000001; // Since Google Takeout stores latlngs as integers
		
		// First, change tabs
		$( 'body' ).addClass( 'working' );
		$( '#intro' ).addClass( 'hidden' );
		$( '#working' ).removeClass( 'hidden' );

		// Now start working!
		processFile( file );

		function status ( message ) {
			$( '#currentStatus' ).text( message );
		}

		function processFile ( file ) {
			var pointNo = 0,
				fileSize = prettySize( file.size ),
				filestream = new FileReadStream( file );

			status( 'Preparing to import file (' + fileSize + ')...' );

			oboe( filestream )
				.on( 'node', {
					'locations.*': function ( location ) {
						// Add the new point... prevent lots of redraws by writing to _latlngs
						
						pointNo += 1;
						if(pointNo % 1000 == 0)
						{
							status( 'Adding point #' + pointNo.toLocaleString() + ' (' + prettySize( filestream._offset ) + ' / ' + fileSize + ')' );
						}
						data.push( [new Date(Number(location.timestampMs)), location.latitudeE7 * SCALAR_E7, location.longitudeE7 * SCALAR_E7 ] );
					},
					'locations': function () {
						// Don't need any other data now
						this.abort();
						// Also, trigger the next step :D
						dataActive = data;
						renderMap();
					}
				} )
				.on( 'fail', function () {
					status( 'Something went wrong reading your JSON file. Ensure you\'re uploading a "direct-from-Google" JSON file and try again, or create an issue on GitHub if the problem persists.' );
   				} );

			
			function renderMap () {
				update();
				// Stage 3!
				stageThree( /* numberProcessed */ pointNo );
			}
		}
	}

	////// STAGE 3 - THEY GROW UP SO FAST //////

	function stageThree ( numberProcessed ) {
		var $done = $( '#done' );

		// Change tabs :D
		$( 'body' ).removeClass( 'working' );
		$( '#working' ).addClass( 'hidden' );
		$done.removeClass( 'hidden' );

		// Update count
		$( '#numberProcessed' ).text( numberProcessed.toLocaleString() );

		// Fade away when clicked
		$done.one( 'click', function () {
			$( 'body' ).addClass( 'map-active' );
			$done.fadeOut();
		} );
	}

}( jQuery, L, oboe, FileReadStream, prettySize ) );
