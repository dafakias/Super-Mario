Game.gameover = function(game){
    
};


var gameoverScreen;

Game.gameover.prototype = {
    create:function(game){
        
        
        
     
        
        
        
        gameoverScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'gameoverScreen');
        gameoverScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
        
    },
   
};
