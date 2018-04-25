CatchIt.StartMenu = function(game){
	this.startBG;
	this.startPrompt;
};

CatchIt.StartMenu.prototype = {
	create: function(){
		startBG = this.add.image(0, 0, 'titlescreen');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'eightbitwonder', 'Click to Start!', 24);
	},
	
startGame: function(pointer){
	this.state.start('Game');
	}
};