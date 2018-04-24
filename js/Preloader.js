CatcherGame.Preloader = function(game){
	"use strict";
	this.preloadbar = null;
	this.titletext = null;
	this.ready = false;
};

CatcherGame.Preloader.prototype = {
	
	preload: function () {
		"use strict";
		//THIS CENTERS THE LOADING BAR TO THE CENTER OF THE CANVAS
		this.preloadbar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderbar'); 
		this.preloadbar.anchor.setTo(0.5, 0.5); //THIS SET THE TRANSFORM POINT TO THE CENTER OF THE OBJECT
		this.load.setPreloadSprite(this.preloadbar);
		
		//ADDS THE TITLE IMAGE
		this.titletext = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titletext.anchor.setTo(0.5, 0.5); //THIS SET THE TRANSFORM POINT TO THE CENTER OF THE OBJECT
	},
	
	create: function (){
		"use strict";
		this.preloadbar.cropEnabled = false;
	},
	
	update: function () {
		"use strict";
		this.ready = true;
	}
};