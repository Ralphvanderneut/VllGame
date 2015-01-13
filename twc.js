var game = new Phaser.Game(800,600, Phaser.AUTO,'game_div');

var left = true;

var main_state = {
	
	preload: function(){
		game.load.image('bg', 'assets/bg.png');
		game.load.image('player', 'assets/player.png');
		game.load.image('vuilniszak', 'assets/vuilniszak.png');
		game.load.image('bank', 'assets/bank.png')
		
		if(!left)
		{
			left = true;
		}
	},
	
	create: function(){
		this.bg = game.add.sprite(0,0, 'bg');
		this.player = game.add.sprite(200,520, 'player');	
		
		this.player.anchor.setTo(.5,.5);
		
		this.garbage = game.add.group();
		this.garbage.createMultiple(15,'vuilniszak');
		
		this.banks = game.add.group();
		this.banks.createMultiple(2,'bank');
		
		cursors = game.input.keyboard.createCursorKeys();
		this.garbageTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 0.75,  this.dropGarbage, this);  		
		this.bankTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 4,  this.dropBank, this);   
		this.score = this.game.time.events.loop(Phaser.Timer.SECOND * 10,  this.updateScore, this);   
	
	    this.vlzcounter = 0;
		var style = { font: "50px Arial", fill: "#000000" };
        this.label_score = this.game.add.text(20, 20, '0' , style);  
		this.frame_Rate = this.game.add.text(60, 20, game.time.fps.toString() , style);  
	},
	
	update: function()
	{	
		if(cursors.right.isDown)
		{
			if(this.player.body.x >= 800)
			{
				this.player.body.x = 800;
			}else{
				this.player.body.x += 10;
				if(left){
					this.player.scale.x *= -1;
					left = false;
				}
			}
		}

		if(cursors.left.isDown)
		{
			if(this.player.body.x <= 0)
			{
				this.player.body.x = 20;
			}else{
				this.player.body.x -= 10;
				if(!left){
					this.player.scale.x *= -1;
					left = true;
				}
			}
		}	
		this.game.physics.overlap(this.player, this.garbage, this.restart_game, null, this);
		this.game.physics.overlap(this.player, this.banks, this.restart_game, null, this);		
	},
	
	dropGarbage: function()
	{
		this.frame_Rate.content = game.time.fps;
		this.num = Math.floor(this.vlzcounter / 1) + 1;
		
		if(this.num > 5)
		{
			this.num = 5;
		}
			
		for(var i=0 ; i < this.num;i++){
			var sack = this.garbage.getFirstDead();		
			var xas = Math.random() * 760 ;
			sack.reset(xas, -20);
			sack.body.gravity.y = 1000;  
			sack.outOfBoundsKill = true;
		}
	},
	
	dropBank: function()
	{
		var bank = this.banks.getFirstDead();
		var xas = Math.random() * 700;
		
		bank.reset(xas, -20);
		bank.body.velocity.y = 600;
		bank.outOfBoundsKill = true;
	},

	updateScore : function(){
		this.vlzcounter += 1;
		this.label_score.content = this.vlzcounter;
	},
	
	restart_game: function() {
        // Remove the timer
        this.game.time.events.remove(this.garbageTimer);
		this.game.time.events.remove(this.bankTimer);
		this.game.time.events.remove(this.score);
        // Start the 'main' state, which restarts the game
        this.game.state.start('main');
    }
}

game.state.add('main', main_state);
game.state.start('main');