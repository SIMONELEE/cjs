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
		this.titletext = this.add.image(this.world.centerX, this.world.centerY-120, 'titleimage');
		this.titletext.anchor.setTo(0.5, 0.5); //THIS SET THE TRANSFORM POINT TO THE CENTER OF THE OBJECT
		
		this.load.image('titlescreen', 'images/bg.png');
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
		
		//ASSETS FOR LEVEL 1:
		//IMAGES
		this.load.image('bgl1', 'images/bg.png');
		this.load.image('catcherl1', 'images/catcher.png');
		this.load.image('catl1', 'images/cat.png');
		
		
		//AUDIO
		//this.load.audio('background','images/jungle.mp3');
   		//this.load.audio('horse','audio/horse.mp3');
		
		
		//ASSETS FOR LEVEL 2
		//images
		this.load.image('bgl2', 'images/castle-bg.jpg');
		this.load.image('catcherl2', 'images/catcher.png');
		this.load.image('catl2', 'images/unicorn.png');
	},
	
	create: function (){
		"use strict";
		this.preloadbar.cropEnabled = false;
	},
	
	update: function () {
		"use strict";
		this.ready = true; 
		this.state.start('StartMenu');
	}
};