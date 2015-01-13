var Boot = function(){
	
	module.exports = Boot;
	
	Boot.prototype = 
	{
		
		create: function(){
			game.state.start('Preloader');
		
		}
	}
};