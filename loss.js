Game.loss = function(game){
    
};


var lossScreen;

Game.loss.prototype = {
    create:function(game){
        
        
        
     
        
        
        
        lossScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'lossScreen');
        lossScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
        
    },
   
};
