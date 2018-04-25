CatcherGame.StartMenu = function(game){
	"use strict";
	this.startBG;
	this.startPrompt;
}

CatcherGame.StartMenu.prototype = {
	create: function(){
		"use strict";
		startBG = this.add.image(0, 0, 'titlescreen');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
		startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'eightbitwonder', 'Touch to Start!', 24);
	},
	
	startGame: function (pointer){
		"use strict";
		this.state.start('Game');
	}
};