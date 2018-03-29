Game.gameover = function(game){
    
};


var gameoverScreen;
var button2;
var i2;
var music;


Game.gameover.prototype = {
    create:function(game){
         music = this.add.audio('song');
        
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen');
        
          button2 = this.add.button(game.world.centerX -1800,50,'playagain',this.actionOnClick2,this);
     
         
        
        
       // gameoverScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'gameoverScreen');
        //gameoverScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
        if(i2==1){
            this.state.start('Level1');
             music.play();
            i2=0;
        }
    },
    
   
  actionOnClick2:function(){
    i2=1;
     },
   
};
