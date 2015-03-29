var Preloader = {

		preload:function()
		{
			this.displayLoadScreen();
			this.loadAssets();
		},
		
		displayLoadScreen:function(){
		
		},
		
		loadAssets:function(){
		
		},
	
		update:function()
		{
		 game.state.start('LevelSelect');
		}
}