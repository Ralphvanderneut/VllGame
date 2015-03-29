var game = new Phaser.Game(800,600, Phaser.AUTO,'game_div');
	
	teks moet worden worden toegevoegd aan main

  <script type="text/javascript" src="./src/states/Boot.js"></script>
  <script type="text/javascript" src="./src/states/Preload.js"></script>
  <script type="text/javascript" src="./src/states/LevelSelect.js"></script>
  <script type="text/javascript" src="./src/states/GarbageDodge.js"></script>
  <script type="text/javascript" src="./src/states/Stats.js"></script>
  <script type="text/javascript" src="Main.js"></script>
	
	var gameSection = [
	new Phaser.Rectangle(0,0, 250, 300),
	new Phaser.Rectangle(250,0, 250, 300),
	new Phaser.Rectangle(500,0, 500, 300),
	new Phaser.Rectangle(0,300, 250, 300),
	new Phaser.Rectangle(250,300, 250, 300),
	new Phaser.Rectangle(500,300, 500, 300)];
	
	var games = [
		"GarbageDodge",
		"HotShower",
		"Goal",
		"ParkTheCar",
		"MakeItRain",
		"Stats"];
	
	var stats = [
		0,
		0,
		0,
		0,
		0];
	

(function(){

startGame();


function startGame (){
game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('LevelSelect', LevelSelect);
game.state.add('GarbageDodge', GarbageDodge);
game.state.add('Stats', Stats)
game.state.start('Boot');
};
})();