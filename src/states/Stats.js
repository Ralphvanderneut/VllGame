var Stats = {
	create:function(){
		 var style = { font: "30px Arial"  ,fill: "#ff0044", align: "center" };
		for(var i = 0; i < stats.length; i++){
		 var writeTxt = game.add.text(game.world.centerX - 100, (game.world.centerY / 2) + i * 30 + 10, games[i], style);
		  var writeTxt = game.add.text(game.world.centerX + 120, (game.world.centerY / 2) + i * 30 + 10, stats[i].toString(), style);
		};
		
		
	}
}