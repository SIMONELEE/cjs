CatchIt.Preloader = function(game){
	this.preloader = null;
	this.titleText = null;
	this.ready = false;
};

CatchIt.Preloader.prototype = {
	
	preload: function(){
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-120, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
		
		this.load.image('titlescreen', 'images/ocean-bg.jpg');
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
		
		//ASSETS FOR LEVEL 1:
		//IMAGES
		this.load.image('bg', 'images/ocean-bg.jpg');
		this.load.image('catcher', 'images/catcher.png');
		this.load.image('catfish', 'images/catfish.png');
		
		//ASSETS FOR LEVEL 2:
		//IMAGES
		this.load.image('bgl2', 'images/spacebg.jpg');
		this.load.image('astro', 'images/astronaut.png');
		this.load.image('alien', 'images/alien.png');
		
		
		
	},
	
	create: function(){
		this.preloadBar.cropEnabled = false;
	},
	
	update: function(){
		this.ready = true;
		this.state.start('StartMenu');
	}
	
};