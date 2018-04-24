var CatcherGame = {};

CatcherGame.Boot = function(game) {};

CatcherGame.Boot.prototype = {
	preload: function(){
		"use strict";
		this.load.image('preloadbar', '../images/loader_bar.png');
		this.load.image('titletext', '../images/TitleImage.png');
	},
	
	create: function(){
		"use strict";
		//THIS REFERS TO THE ACTUAL GAME OBJECT AND REFERS TO THE GAME ITSELF
		this.input.maxPointers = 1; //THIS MEANS THAT THERE'S ONLY ONE POINTER ACTIVATED AT A TIME
		this.input.addPointer();
		this.stage.backgroundColor = '#f2f2f2'; 
		
		this.state.start('Preloader');
	}
};