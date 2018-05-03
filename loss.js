Game.loss = function(game){
    
};


var lossScreen;
var button;
var i;
var music;

var sum2Text;
var sum3Text;
var sum5Text;
var sum10Text;

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
         if(x==10){
        sum10Text = game.add.text(15,200,'sum10=',{fontSize: '32px',fill : '#000'});
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
            sum10=0;
            music.play();
            i=0;
            lathos =0;
        }
       if(x==2 && sum2!==1 && lathos!==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμούς από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
       }
        if(x==3 && sum3!==1 && lathos !==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμούς από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        if(x==5 && sum5!==1 && lathos!==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμούς από\nτους ' + s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        if(x==10 && sum10!==1 && lathos!==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμούς από\nτους ' + s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        
        if(x==2 && sum2==1 && lathos!==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμό από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
       }
        if(x==3 && sum3==1 && lathos!==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμό από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        if(x==5 && sum5==1 && lathos!==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμό από\nτους ' + s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
         if(x==10 && sum10==1 && lathos!==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμό από\nτους ' + s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        
        if(x==2 && sum2!==1 && lathos==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμούς από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
       }
        if(x==3 && sum3!==1 && lathos==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμούς από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        if(x==5 && sum5!==1 && lathos==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμούς από\nτους ' +s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
         if(x==10 && sum10!==1 && lathos==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμούς από\nτους ' +s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        
        if(x==2 && sum2==1 && lathos==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμό από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
       }
        if(x==3 && sum3==1 && lathos==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμό από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        if(x==5 && sum5==1 && lathos==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμό από\nτους ' + s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        if(x==10 && sum10==1 && lathos==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμό από\nτους ' + s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        
    },
   
     actionOnClick:function(){
    i=1;
     },
};
