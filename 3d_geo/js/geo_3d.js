var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		// Create 3D model drawable
		var earth = new AR.Model("assets/earth.wt3", {
			scale: {
   			 x: 1, 
   			 y: 1,
  			 z: 1
  			}
		});


		//250,7° from current location of the user (about West-South-West)  -7 northing and -20 easting
		var loc = new AR.RelativeLocation(null, -7, -20, 1);


        var obj = new AR.GeoObject(loc, {
            drawables: {
				cam: [earth]
			}
		});
	},

	worldLoaded: function worldLoadedFn() {
		//var cssDivLeft = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		//var cssDivRight = " style='display: table-cell;vertical-align: middle; text-align: left;'";
		document.getElementById('loadingMessage').style.visibility = 'hidden';
		//	"<div" + cssDivLeft + ">Scan Red Bulletin Target:</div>" +
		//	"<div" + cssDivRight + "><img src='assets/surfer.png'></img></div>";
	}
};

World.init();