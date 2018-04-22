Game.loss = function(game){
    
};


var lossScreen;
var button;
var i;
var music;

var sum2Text;
var sum3Text;
var sum5Text;


Game.loss.prototype = {
    create:function(game){
         music = this.add.audio('song');
        
        lossScreen = this.add.tileSprite(0,0,3200,800,'lossScreen');
        
     
        
         button = this.add.button(game.world.centerX -2060,-30,'playagain',this.actionOnClick,this);
       if(x==2){
        sum2Text = game.add.text(15,200,'sum2=',{fontSize: '32px',fill : '#000'});
       }
         if(x==3){
        sum3Text = game.add.text(15,200,'sum3=',{fontSize: '32px',fill : '#000'});
       }
         if(x==5){
        sum5Text = game.add.text(15,200,'sum5=',{fontSize: '32px',fill : '#000'});
       }
       
        
        //lossScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'lossScreen');
        //lossScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
        if(i==1){
            this.state.start('Level1');
            sum2=0;
            sum3=0;
            sum5=0;
            music.play();
            i=0;
            
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
   
     actionOnClick:function(){
    i=1;
     },
};
