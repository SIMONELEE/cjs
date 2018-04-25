var CatchIt = {};

CatchIt.Boot = function(game) {};

CatchIt.Boot.prototype = {
	preload: function(){
		this.load.image('preloaderBar', 'images/loader_bar.png');
		this.load.image('titleimage', 'images/titletext.png');
	},
	
	create: function(){
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.input.addPointer();
		this.stage.backgroundColor = '#7C1ABD';
		
		this.state.start('Preloader');
	}
};