//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'test', null, false, false);

//var BasicGame = function (game) {};

//BasicGame.Boot = function (game) {};

var timer, timerEvent, text;
var countDown = 30;
var cursors, cat, catcher, score, scoreTXT, music, catsound;
BasicGame.Boot.prototype = {
    preload: function () {
	
		//images
		game.load.image('bg', 'images/bg.png');
		game.load.image('catcher', 'images/catcher.png');
		game.load.image('cat', 'images/cat.png');
		
		
		//music
		game.load.audio('background','images/jungle.mp3');
   		game.load.audio('horse','audio/horse.mp3');
    
        
    },
    create: function () {
		
		//Create BG
		game.add.sprite(0,0, 'bg');
		
		//Create Catcher
		catcher=game.add.sprite(game.width / 2 , 350, 'catcher');
		catcher.anchor.setTo(0.5, 0.5);
		
		//Create Cat
		cat=game.add.sprite(game.width * Math.random(), game.height * Math.random(),'cat');
		cat.anchor.setTo(0.5, 0.5);
	
		
		game.physics.enable(catcher, Phaser.Physics.ARCADE);
		game.physics.enable(cat, Phaser.Physics.ARCADE);
		
		cursors = game.input.keyboard.createCursorKeys();
		
		//create SCORE
		score = 0;
		scoreTXT = game.add.text(10, 10, score.toString(), { font: "30px Press Start 2P", fill: "#ffffff"});
		
		
		//add sound & music
		music = game.add.audio('background');
		music.play();
		
		catsound= game.add.audio('horse');
		
		
		
		// Create a custom timer
        timer = game.time.create();
        
        // Create a delayed event 1m and 30s from now
        timerEvent = timer.add(Phaser.Timer.SECOND * countDown, this.endTimer, this);
        
        // Start the timer
        timer.start();
      
        text = game.add.text(750, 30, this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 
        { font: "30px 'Press Start 2P'", fill: "#ff0044" });
      
        text.anchor.set(0.5);
      
        // this.scoreLabelTween = game.add.tween(text.scale).to({ x: 1.2, y: 1.2}, 600, Phaser.Easing.Linear.In).to({ x: 1, y: 1}, 200, Phaser.Easing.Linear.In);
      
        this.scoreLabelTween = game.add.tween(text.scale).to({ x: 1.2, y: 1.2}, 2000, Phaser.Easing.Linear.In);
 
		
    },
	
	
    update: function () {
		var tmp = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
 
        if (timer.running && tmp >= 1) {
          text.text = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
          this.scoreLabelTween.start();
        }
		
		//runs the game loop
		//if left arrow is pressed
		if(cursors.left.isDown && catcher.x>10){
			catcher.x -= 5;
			//scaling 100% pointing in the orginal directiosn
			catcher.scale.x = 1;
			
		}
		
		if(cursors.right.isDown && catcher.x<game.width-10){
			catcher.x += 5;
			catcher.scale.x = -1;
			
		}
		
		if(cursors.up.isDown && catcher.y>10){
			catcher.y -= 5;
			
		}
		
		if(cursors.down.isDown && catcher.y<game.height-10){
			catcher.y += 5;
			}
		
		
		//arguments: objects, callback function
		
		game.physics.arcade.overlap(catcher, cat, catHitHandler);
        
    },
	
	
    render: function () {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (!timer.running && score != 10) {
			loseText = game.add.text(game.world.centerX, game.world.centerY, "- You lose -\nclick to play again", { font: "25px 'Press Start 2P'", fill: '#ffffff', align: "center"  });
    		loseText.anchor.setTo(0.5, 0.5);
			game.input.onDown.addOnce(youLose, this);
			cat.destroy();
			catcher.destroy();
			text.kill();
        }
    },
	
	
    endTimer: function() {
       // Stop the timer when the delayed event triggers
        timer.stop();
    },
	
    formatTime: function(s) {
		// Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "" + (s - minutes * 60);
        return seconds.substr(-2);     
    }
};
		
function catHitHandler(){
		console.log('Cat caught!');
		//we need to relocate our cat
		catsound.play();
		cat.x = game.width * Math.random();
		cat.y = game.height * Math.random();
		score++;
		scoreTXT.setText(score.toString());
			if (score == 10) {
				winText = game.add.text(game.world.centerX, game.world.centerY, "- You win -\nclick to play again", { font: "25px 'Press Start 2P'", fill: '#ffffff', align: "center"  });
				winText.anchor.setTo(0.5, 0.5);
				game.input.onDown.addOnce(youWin, this);
				text.kill();
				cat.destroy();
				catcher.destroy();
			} 
	}
		
	function youLose() {
    loseText.destroy();
	game.state.start('Boot');	
	}	
		
		
	function youWin() {
    winText.destroy();
	game.state.start('Boot');	
	}
	
		
game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');