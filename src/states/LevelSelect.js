var LevelSelect = {

	create: function(){
		this.game.input.onDown.add(this.gameSelector, this);
	},
	
	gameSelector: function()
	{
		for(var i = 0; i < gameSection.length; i++){
			if(gameSection[i].contains(this.game.input.x , this.game.input.y)){
				this.game.input.onDown.remove(this.gameSelector, this);
				game.state.start(games[i]);
				break;
			}
		};
	},
	
	update: function(){
	}
}