var Preloader = function(){
	
	module.exports = Preload

	Preload.prototype ={
	
		update:function()
		{
		game.state.start('LevelSelect');
		}
	}
}