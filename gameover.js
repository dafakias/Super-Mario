Game.gameover = function(game){
    
};


var gameoverScreen;
var button2;
var i2;
var music;
var sum2Text;
var sum3Text;
var sum5Text;


Game.gameover.prototype = {
    create:function(game){
         music = this.add.audio('song');
        
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen');
        
          button2 = this.add.button(game.world.centerX -2370,50,'playagain',this.actionOnClick2,this);
     
          if(x==2){
        sum2Text = game.add.text(50,250,'sum2=',{fontSize: '32px',fill : '#000'});
       }
         if(x==3){
        sum3Text = game.add.text(50,250,'sum3=',{fontSize: '32px',fill : '#000'});
       }
         if(x==5){
        sum5Text = game.add.text(50,250,'sum5=',{fontSize: '32px',fill : '#000'});
       }
       
        
       // gameoverScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'gameoverScreen');
        //gameoverScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
        if(i2==1){
            this.state.start('Level1');
             music.play();
            sum2=0;
            sum3=0;
            sum5=0;
            i2=0;
        }
        
        if(x==2){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμούς \n που διαιρούνται με το 2!';
       }
        if(x==3){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμούς \n που διαιρούνται με το 3!';
        }
        if(x==5){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμούς \n που διαιρούνται με το 5!';
        }
    },
    
   
  actionOnClick2:function(){
    i2=1;
     },
   
};
