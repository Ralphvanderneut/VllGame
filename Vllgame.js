(function(){

var game = new Phaser.Game(800,600, Phaser.AUTO,'game_div');

	var gameSection = [
		new Phaser.Rectangle(0,0, 250, 300),
		new Phaser.Rectangle(250,0, 250, 300)
	]
	

var mainMenu_state = {

	create: function(){
		
		this.game.input.onDown.add(this.gameSelector, this);
	},

	render: function(){
		
			game.debug.geom(gameSection[0],'#0fffff');

	},
	
	gameSelector: function()
	{

		for(var i = 0; i < gameSection.length; i++){
			console.log(gameSection[i]);
			if(gameSection[i].contains(this.game.input.activePointer.positionDown)){
				console.log(i);
				break;
			}
		}
	}
};


game.state.add('mainMenu', mainMenu_state);
game.state.start('mainMenu')

})();