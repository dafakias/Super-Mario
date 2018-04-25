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
        
        if(x==2){
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen2');
        }
        if(x==3){
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen3');
        }
        if(x==5){
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen5');
        }
        
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
            lathos = 0;
        }
        
        if(x==2){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμούς από\nτους 14 που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
       }
        if(x==3){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμούς από\nτους 14 που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        if(x==5){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμούς από\nτους 13 που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
    },
    
   
  actionOnClick2:function(){
    i2=1;
     },
   
};
