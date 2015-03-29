EnemyFactory = function(){
    this.createEnemy = function(type)
    {
        var enemy;
        if(type == 'garbage'){
         enemy = new GarbageBag();
        }
        
        return enemy;
    }
}


Enemy = function(x,y,spritesheetKey){
    this.sprite = game.add.sprite(x, y, spritesheetKey)
}

DropEnemy = function(x,y,spritesheetKey, speed){
    this.dropEnemy = new Enemy(x,y, spritesheetKey);
	
    this.dropEnemy.sprite.body.gravity.y = 100;
    
	this.fallingspeed = speed;
}


DropEnemy.prototype = {
    
    update: function(){
           
    }
}


GarbageBag = function(){
    var x = Math.random() * 760;
    var y = -20;

	var garbageBag = new DropEnemy(x,y,"vuilniszak", 1000);   
}





