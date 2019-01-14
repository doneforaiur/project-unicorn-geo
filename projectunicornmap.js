// API Key for Mapbox. Get one here:
// https://www.mapbox.com/studio/account/tokens/
const key = 'pk.eyJ1IjoiZG9uZWZvcmFpdXIiLCJhIjoiY2pxd2w2bHV1MDN4NTN4cjd1aHgxY3IzYiJ9.h-NvxEWO8nM3qD9ZdKq_DA'

// Options for map
const options = {
  lat: 0,
  lng: 0,
  zoom: 1.5,
  studio: true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  style: 'mapbox://styles/doneforaiur/cjqwnjrfs0c9b2smr0r3vmqv3',
};

const mappa = new Mappa('Mapbox', key);
var myMap;

var canvas;

var users = [
	{timezone: 'England',lat: 51.508530 , lon: 0.076132,num:1},	
	{timezone: 'Poland',lat: 50.287063 , lon: 21.423810,num:1},	
	{timezone: 'South Africa',lat: -26.270760 , lon:28.112268,num:1},	
	{timezone: 'Illinois ',lat: 41.881832 , lon:-87.623177,num:1},	
	{timezone: 'PST',lat: 36.778259 , lon:-119.417931,num:12},
	{timezone: 'MST',lat: 46.965260 ,lon: -109.533691,num:2},
	{timezone: 'CST',lat: 32.318230 , lon:-86.902298,num:4 },
	{timezone: 'EST',lat: 40.730610 ,lon:  -73.935242,num:10},
	{timezone: 'UTC',lat: 55.676098 ,lon:  12.568337,num:3},
	{timezone: 'CET',lat: 48.864716 ,lon:  2.349014,num:3},
	{timezone: 'EET',lat: 59.436962, lon:  24.753574,num:1},
	{timezone: 'TRT',lat: 41.005,lon:  39.72694,num:1},
	{timezone: 'UTC+4',lat: 40.177200 , lon: 44.503490,num:1},
	{timezone: 'UTC+5',lat: 28.644800,lon: 77.216721,num:1},
	{timezone: 'PHT',lat: 14.599512,lon:  120.984222,num:1},
	{timezone: 'AEST',lat: -33.865143 ,lon:  151.209900,num:2},
	{timezone: 'NZDT',lat:  -36.848461,lon: 174.763336,num:1},
	{timezone: 'SAST', lat: -29.8561, lon: 31.0352, num: 1},
	{timzone: 'cultofthepartyparrot', lat: 41.005, lon: 39.72694, num: 1}
]
/*
Mon 14, 09:30:34 (PST):      JR, Suavecito, Ryka, Cristian Garcia, Chris, vim, daletroN, fangweb, Luke, roy, GreenWithMV, david
Mon 14, 10:30:34 (MST):      rilakumma, Yash Raikar
Mon 14, 11:30:34 (CST):      Chris M., Trujic1000, dayvod, Kremor
Mon 14, 12:30:34 (EST):      Elliott S, Danny Brown, Webdevbuilds, Chris Jimenez, mindofbeholder, courtneylue, Khalif, ricky, dclark, Dot_Equals
Mon 14, 17:30:34 (UTC):      Jay, DomC, Matthew Jonat, Stephen, Timunas, Connor
Mon 14, 18:30:34 (CET):      Stan The Man, Malice
Mon 14, 18:30:34 (CET/CEST): Kkm
Mon 14, 19:30:34 (SAST):     Abdelrhman Fawzy, Ghostbunny1, Aaron Garton, Kenneth Wright
Mon 14, 19:30:34 (EET):      ordwvr
Mon 14, 20:30:34 (TRT):      Mirza
Mon 14, 21:30:34 (UTC+4):    Sed. Tosin
Mon 14, 22:30:34 (UTC+5):    mtea994
Tue 15, 01:30:34 (PHT):      ruj
Tue 15, 03:30:34 (AEST):     Harry, William Belcher
Tue 15, 06:30:34 (NZDT):     Alex
 */



function setup() {
  canvas = createCanvas(750, 550);
	img = loadImage('unicorn.png');
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(drawUsers);
  fill(109, 255, 0);
  stroke(100);
}

function draw() {
	
}

function drawUsers() {
  clear();

  for (let i = 0; i < users.length; i ++) {
    const latitude = users[i].lat;
    const longitude =users[i].lon;
    if (myMap.map.getBounds().contains([latitude, longitude])) {

      const pos = myMap.latLngToPixel(latitude, longitude);

      var _size = users[i].num+7 + myMap.zoom();
      ellipse(pos.x, pos.y, _size+5, _size+5);
      image(img,pos.x-_size/2, pos.y-_size/2, _size, _size);
    }
  }
}