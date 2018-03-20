Game.afigisi = function(game){
    
};


var afigisiScreen;
var afigisiScreen2;
var afigisiScreen3;
var n=0;
var music;

Game.afigisi.prototype = {
    create:function(game){
        
        
         music = this.add.audio('song');
         music.play();
     
        
         //this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen');
             afigisiScreen.anchor.setTo(0.5,0.5);
        //}); 
        
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen2 = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen2');
             afigisiScreen2.anchor.setTo(0.5,0.5);
        }); 
        
         this.time.events.add(Phaser.Timer.SECOND * 8, function(){
             afigisiScreen3 = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen3');
             afigisiScreen3.anchor.setTo(0.5,0.5);
        }); 
       
        this.time.events.add(Phaser.Timer.SECOND * 12,function(){
           n=1;
        })
       
  
    },
    
    update:function(game){
        if(n==1){
            this.state.start('Level1');
        }
    },
   
};
