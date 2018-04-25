var astro, alien, scorel2, scoreTXTl2, cursorsl2, winTextl2, loseTextl2, whoosh ;
var timerl2, timerEventl2, textl2;
var countDownl2 = 15;


CatchIt.GameLvl2 = function(game) {
	'use strict';
	this.astro;
	this.alien;
	this.bgl2;
	this.whoosh;	
};

CatchIt.GameLvl2.prototype = {
    
	create: function(){
		 'use strict';
			this.prepareWorldl2();

			this.whoosh = this.add.audio('whoosh');
			astro = this.add.sprite(this.world.width/ 2, this.world.height/2, 'astro');
			astro.anchor.setTo(0.5, 0.5);
			this.physics.enable(astro, Phaser.Physics.ARCADE);
			astro.enableBody = true;

			alien = this.add.sprite(this.world.width* Math.random(), this.world.height* Math.random(),'alien');
			alien.anchor.setTo(0.5, 0.5);
			this.physics.enable(alien, Phaser.Physics.ARCADE);
			alien.enableBody = true;

			cursorsl2 = this.input.keyboard.createCursorKeys();

			//SCORE
			scorel2 = 0;
			scoreTXTl2 = this.add.text(10, 10, scorel2.toString(), {fill: "#ffffff"});


			//TIMER
			timerl2 = this.time.create();
			timerEventl2 = timerl2.add(Phaser.Timer.SECOND * countDownl2, this.endTimer, this);
			timerl2.start();

			textl2 = this.add.text(750, 30, this.formatTimel2(Math.round((timerEventl2.delay - timerl2.ms) / 1000)), 
			{ font: "30px 'eightbitwonder'", fill: "#ff0044" });

			textl2.anchor.set(0.5);
	   },


		update: function () {
		'use strict';
		this.keyboardl2();
		this.physics.arcade.overlap(alien, astro, alienHitHandler, null, this);	
		},


	  //PREPARING THE LEVEL WORLD
	   prepareWorldl2: function(){
		 'use strict';
			this.add.image(0,0, 'bgl2');
		},


		//KEYBOARD MOVEMENTS
		keyboardl2:function(){
			'use strict';

			if(cursorsl2.left.isDown && astro.x>10){
				astro.x -= 5;
				//scaling 100% pointing in the orginal directiosn
				astro.scale.x = -1;
			}

			if(cursorsl2.right.isDown && astro.x<this.world.width-10){
				astro.x += 5;
				astro.scale.x = 1;
			}

			if(cursorsl2.up.isDown && astro.y>10){
				astro.y -= 5;
			}

			if(cursorsl2.down.isDown && astro.y<this.world.height-10){
				astro.y += 5;
			}

			var tmpl2 = this.formatTimel2(Math.round((timerEventl2.delay - timerl2.ms) / 1000));


			if (timerl2.running && tmpl2 >= 1) {
			  textl2.text = this.formatTimel2(Math.round((timerEventl2.delay - timerl2.ms) / 1000));
			}
		},


		render: function () {
			'use strict';
			// If our timer is running, show the time in a nicely formatted way, else show 'Done!'
			if (!timerl2.running && scorel2 !== 10) {
				loseTextl2 = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'eightbitwonder', 'play again', 24);
				loseTextl2.anchor.setTo(0.5, 0.5);
				this.input.onDown.addOnce(restartl2, this);
				textl2.kill();
				alien.destroy();
				astro.destroy();

			}
		},

		endTimerl2: function() {
			'use strict';
		   // Stop the timer when the delayed event triggers
			timerl2.stop();
		},

		formatTimel2: function(s) {
			'use strict';
			// Convert seconds (s) to a nicely formatted and padded time string
			var minutes = "0" + Math.floor(s / 60);
			var seconds = "" + (s - minutes * 60);
			return seconds.substr(-2);     
		}
};


function alienHitHandler(){
		console.log('alien caught!');
	   	this.whoosh.play();
		alien.x = this.world.width * Math.random();
		alien.y = this.world.height * Math.random();
		scorel2++;
		scoreTXTl2.setText(scorel2.toString());
		if (scorel2 === 10) {
		winTextl2 = this.add.bitmapText(this.world.centerX, this.world.centerY, 'eightbitwonder', "- Congratulations-\nYou won the game.", 28);
		this.input.onDown.addOnce(nextLevell2, this);
    	winTextl2.anchor.setTo(0.5, 0.5);
		textl2.kill();
		alien.destroy();
		astro.destroy();
	}
}


function restartl2() {
	'use strict';
    loseTextl2.destroy();
	this.bg2.stop();
	this.state.start('GameLvl2');	
	}

function nextLevell2() {
	'use strict';
	 winTextl2.destroy();
	this.bgl2.stop();
	this.state.start('StartMenu');

	}