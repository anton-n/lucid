	//= ../libs/svg4everybody/svg4everybody.legacy.js'
	// -----------------------------------------------

	//= ../libs/jquery/jquery-3.2.1.min.js
	//= ../libs/current-device/current-device.js
	//= ../libs/slick-carousel/slick/slick.js
	//= ../libs/jquery.nicescroll/dist/jquery.nicescroll.js


// $(function() {
// 	init();
// })
		// google.maps.event.addDomListener(window, 'load', init);

		function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,

				// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
					{
						"color": "#6195a0"
					}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "geometry.stroke",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
					{
						"lightness": "0"
					},
					{
						"saturation": "0"
					},
					{
						"color": "#f5f5f2"
					},
					{
						"gamma": "1"
					}
					]
				},
				{
					"featureType": "landscape.man_made",
					"elementType": "all",
					"stylers": [
					{
						"lightness": "-3"
					},
					{
						"gamma": "1.00"
					}
					]
				},
				{
					"featureType": "landscape.natural.terrain",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#bae5ce"
					},
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					},
					{
						"visibility": "simplified"
					}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "simplified"
					}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"visibility": "simplified"
					}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text",
					"stylers": [
					{
						"color": "#4e4e4e"
					}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [
					{
						"color": "#787878"
					}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "off"
					}
					]
				},
				{
					"featureType": "transit.station.airport",
					"elementType": "labels.icon",
					"stylers": [
					{
						"hue": "#0a00ff"
					},
					{
						"saturation": "-77"
					},
					{
						"gamma": "0.57"
					},
					{
						"lightness": "0"
					}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "labels.text.fill",
					"stylers": [
					{
						"color": "#43321e"
					}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "labels.icon",
					"stylers": [
					{
						"hue": "#ff6c00"
					},
					{
						"lightness": "4"
					},
					{
						"gamma": "0.75"
					},
					{
						"saturation": "-68"
					}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
					{
						"color": "#eaf6f8"
					},
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
					{
						"color": "#c7eced"
					}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
					{
						"lightness": "-49"
					},
					{
						"saturation": "-53"
					},
					{
						"gamma": "0.79"
					}
					]
				}
				]
			};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		// var image = "img/g-map-marker.png";
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			// title: 'Marker',
			// icon: image
		});


		google.maps.event.addDomListener(window, 'resize', function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});


		map.addListener('click', function() {
			map.setOptions({
				scrollwheel: true
			});
		});

		map.addListener('drag', function() {
			map.setOptions({
				scrollwheel: true
			});
		});

		map.addListener('mouseout', function() {
			map.setOptions({
				scrollwheel: false
			});
		});

	}


	$(function() {
		init();
		svg4everybody({});
		$('.slider').slick({
			infinite: true,
			slidesToShow: 2,
			dots: true,
			arrows: false,
		});

		if(!device.tablet() && !device.mobile()) {
			$('body').niceScroll({
				autohidemode: false,
				horizrailenabled: false,
				cursorwidth: "10px",
				cursorcolor:"#008ed6",
				cursorborder: "0",
				cursorborderradius: "0",
				background: "#f1f1f1",
				railpadding: { top: 0, right: 0, left: 0, bottom: 0},
			});
			// $('body').getNiceScroll().resize();
		}
		


	});