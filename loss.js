Game.loss = function(game){
    
};


var lossScreen;
var button;
var i;
var music;


Game.loss.prototype = {
    create:function(game){
         music = this.add.audio('song');
        
        lossScreen = this.add.tileSprite(0,0,3200,800,'lossScreen');
        
     
        
         button = this.add.button(game.world.centerX -1450,-30,'playagain',this.actionOnClick,this);
       
        
        //lossScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'lossScreen');
        //lossScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
        if(i==1){
            this.state.start('Level1');
            music.play();
            i=0;
            
        }
    },
   
     actionOnClick:function(){
    i=1;
     },
};
