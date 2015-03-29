function Right(user){
	if(user.body.x >= 800)
	{
		user.body.x = 800;
	}else{
		user.body.x += 10;
	}
}

function Left(user){
	if(user.body.x <= 0)
	{
		user.body.x = 20;
	}else{
		user.body.x -= x;
	}
}

var Command = function(execute,val){
	this.execute = execute;
	this.val = val;
};

var LeftCommand = function(val){
	return new Command(Left, val);
};

var RightCommand = function(val){
	return new Command(Right, val);
};

var PlayerInput = function(){
	var x = 20;
	
	return {
		execute:function(command){
			command.execute(command.val);
		}
	};

}