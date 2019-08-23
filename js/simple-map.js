


// ---------- MAP ----------

var treatmap;
// var markerList = []; // on a level with map, markers can be accessed by index

var impBounds = [
	[40.55, -74], // southWest
	[44, -71.5] // northEast
];

var impMaxBounds = [
	[41.18, -73.43],
	[43.4, -71.82]
];

// // Define layer to be added later.
// var hitchcock1834   = L.tileLayer('map/tiles/hitchcock1834/{z}/{x}/{y}.png', {
// 	attribution: 'Hitchcock map',
// 	// bounds: mybounds, //tempbounds
// 	minZoom: 9,
// 	maxZoom: 13,
// 	//opacity: .7,
//     tms: true
// });

// Define base layer.
// var stamen = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-'
var stamen = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain'
	// + 'background/{z}/{x}/{y}.{ext}', {
	+ '/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, '
	+ '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; '
	+ 'Map data &copy; ' 
	+ '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	// bounds: mybounds,
	bounds: impBounds,
	minZoom: 9,
	maxZoom: 13,
	ext: 'png'
});

// ----- set map -----
treatmap = L.map('mapdiv', {
	center: [42.0, -72.6], // -72.45
	zoom: 9, // 9
	maxBounds: impMaxBounds,
	maxBoundsViscosity: 0.5,
	//layers: [streets, markerList]
	// layers: [mapLayerObjects[layerIndex]] //, siteMarkers hitchcock
	// layers: [stamen] // topobase stamen , siteMarkers hitchcock
	layers: [stamen] // topobase stamen , siteMarkers hitchcock
});

