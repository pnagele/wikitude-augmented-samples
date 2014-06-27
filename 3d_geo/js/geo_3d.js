var World = {

	init: function initFn() {
		this.createPois();
	},

	createPois: function createPoisFn() {

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
	}
};

World.init();