var mainMenu_state = {
	
	var gameSection = {
	new Phaser.Rectangle(0,0, 250, 300)
	new Phaser.Rectangle(250,0, 250, 300)
	}
	
	
	preload:function()
	{
	
	}
	
	create:function()
	{
		this.game.input.onDown.add(this.gameSelector, this);
	}

	update:function()
	{
	
	}
	
	gameSelector:function()
	{
	console.log("click");
		for(var i = 0; i < gameSection; i++){
			if(gameSection[i].contains(this.game.input.activePointer.positionDown)){
				console.log(i);
				break;
			}
		}
	}

}