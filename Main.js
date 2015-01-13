(function(){

var game = new Phaser.Game(800,600, Phaser.AUTO,'game_div');

startGame();


startGame = funtion(){
game.state.add('Boot', require('./src/states/Boot'));
game.state.add('Preload', require('./src/states/Preload'));
game.state.add('LevelSelect', require('./src/states/LevelSelect'));

game.state.start('Boot');
}
})();