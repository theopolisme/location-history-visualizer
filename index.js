( function ( $, L, prettySize ) {
	var map, heat,
		heatOptions = {
			radius: 25,
			blur: 15
		};

	// Start at the beginning
	stageOne();

	////// STAGE 1 - ZE VELCOME UNT ZE UPLOAD //////

	function stageOne () {
		var dropzone;

		// Initialize the map
		map = L.map( 'map' ).setView([0,0], 2);
		L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'location-history-visualizer is open source and available <a href="https://github.com/theopolisme/location-history-visualizer">on GitHub</a>. Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.',
			maxZoom: 18,
			minZoom: 2
		} ).addTo( map );

		// Initialize the dropzone
		dropzone = new Dropzone( document.body, {
			url: '/',
			previewsContainer: document.createElement( 'div' ), // >> /dev/null
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
		heat = L.heatLayer( [], heatOptions ).addTo( map ),
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
			var fileSize = prettySize( file.size ),
				reader = new FileReader();

			status( 'Preparing to import file (' + fileSize + ')...' );

			reader.onprogress = function ( e ) {
				var percentLoaded = Math.round( ( e.loaded / e.total ) * 100 );
				status( percentLoaded + '% of ' + fileSize + ' loaded...' );
			};

			reader.onload = function ( e ) {
				var locations;

				status( 'Generating map...' );

				locations = JSON.parse( e.target.result ).locations;

				heat._latlngs = locations.map( function ( location ) {
					return [ location.latitudeE7 * SCALAR_E7, location.longitudeE7 * SCALAR_E7 ];
				} );

				heat.redraw();
				stageThree( /* numberProcessed */ locations.length );
			};

			reader.onerror = function () {
				status( 'Something went wrong reading your JSON file. Ensure you\'re uploading a "direct-from-Google" JSON file and try again, or create an issue on GitHub if the problem persists. (error: ' + reader.error + ')' );
			};

			reader.readAsText( file );
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
			activateControls();
		} );

		function activateControls () {
			var option,
				originalHeatOptions = $.extend( {}, heatOptions ); // for reset

			// Update values of the dom elements
			function updateInputs () {
				for ( option in heatOptions ) {
					document.getElementById( option ).value = heatOptions[option];
				};
			}

			updateInputs();

			$( '.control' ).change( function () {
				heatOptions[ this.id ] = Number( this.value );
				heat.setOptions( heatOptions );
			} );

			$( '#reset' ).click( function () {
				$.extend( heatOptions, originalHeatOptions );
				updateInputs();
				heat.setOptions( heatOptions );
			} );
		}
	}

}( jQuery, L, prettySize ) );
