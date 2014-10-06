( function ( $, L, oboe, FileReadStream, prettySize ) {
	var map;
	var heat;
	// data now stored in format [time, lat, lat]
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

		$(".updateable").change(function(e)
		{
			var maxValue = Number($("#heatRangeId").val());
			var blur = Number($("#blurId").val());
			var radius = Number($("#radiusId").val());
			heat.setOptions({blur:blur, max:maxValue, radius:radius});
			
			var value = $("#startDate").val();
			filterStruct.startDate = new Date(value);
		
			value = $("#endDate").val();
			filterStruct.endDate= new Date(value);
			
			value = $("#startTime").val();
			filterStruct.startTime= value;
			
			value = $("#endTime").val();
			filterStruct.endTime= value;
			
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
				fileSize = prettySize( file.size );
			status( 'Preparing to import file (' + fileSize + ')...' );
			reader = new FileReader();
			reader.onprogress = function(evt)
			{
			if (evt.lengthComputable) {
				 var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
				  status(percentLoaded +"% of " + fileSize + " loaded");
			};
			}
			reader.onload = function(evt)
			{
				var tmp = JSON.parse(evt.target.result);
				data = tmp.locations.map(function(location){return [new Date(Number(location.timestampMs)), location.latitudeE7 * SCALAR_E7, location.longitudeE7 * SCALAR_E7 ]});
				activeData = data;
				pointNo = data.length;
				renderMap();
			};
			reader.readAsText(file);
			
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
