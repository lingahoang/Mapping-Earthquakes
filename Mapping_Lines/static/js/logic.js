// Add console.log to check to see if our code is working.
console.log("working");

// // Create a map object with a center at SFO airport 
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // // Coordinates for each point to be used in the line
// // let line = [
// //     // LAX
// //     [33.9416, -118.4085],
// //     // SFO
// //     [37.6213, -122.3790]
// //   ];

// // Mapping multiple lines
// // Coordinates for each point to be used in the line
// let line = [
//     // LAX
//     [33.9416, -118.4085],
//     // SFO
//     [37.6213, -122.3790],
//     // SLC
//     [40.7899, -111.9791],
//     // SEA
//     [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line yellow
// L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);

// // We create the tile layer that will be the background of our map.
// // Street map style "streets-v11"
// // Change map style to "satellite-streets-v11"
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// SkillDrill 
//Create airline route from SFO to JFK to AUS to YYZ 
// Make a route in blue dash line, weight of 4, opacity of 0.5 on light map 
// Create a map object with a center at SFO airport 

let map = L.map('mapid').setView([40.7, -94.5], 5);

let line = [
    // SFO
    [37.6213, -122.3790],
    // AUS
    [30.1900, -97.6687],
    //YYZ
    [43.6777, -79.6248],
    // JFK 
    [40.6417, -73.7809]
];

let dashLine =
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4, 
    // fillRule: 
  }).addTo(map);

  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);