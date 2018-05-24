Game.afigisi = function(game){
    
};


var afigisiScreen;
var afigisiScreen2;
var afigisiScreen3;
var afigisiScreen4;
var afigisiScreen5;
var afigisiScreen6;
var afigisiScreen7;
var afigisiScreen8;
var afigisiScreen9;
var afigisiScreen10;
var afigisiScreen11;
var n=0;
var ke=1;
var pl;
var music;
var mybutton;

Game.afigisi.prototype = {
    create:function(game){
        
        
         music = this.add.audio('song');
         music.play();
     
        
         //this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             
        
        
            
        
        //this.time.events.add(Phaser.Timer.SECOND * 28,function(){
           
        //});
        
       
       
  
    },
    
    update:function(game){
      
      if(n==0){
          //this.time.events.add(Phaser.Timer.SECOND * 4, function(){
          afigisiScreen = game.add.sprite(750,420,'afigisiScreen');
             afigisiScreen.anchor.setTo(0.5,0.5);
               if(n!=8){
                 n=20;
                 }
        //}); 
      }
        
         if(n==20){
             
             this.time.events.add(Phaser.Timer.SECOND * 4, function(){
               afigisiScreen2 = game.add.sprite(750,420,'afigisiScreen2');
             afigisiScreen2.anchor.setTo(0.5,0.5);
                 if(n!=8){
                 n=10;
                 }
        }); 
             }
        if(n==10){
       
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen5 = game.add.sprite(750,420,'afigisiScreen5');
             afigisiScreen5.anchor.setTo(0.5,0.5);
             if(n!=8){
                 n=11;
                 }
        });
        }
       if(n==11){
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen10 = game.add.sprite(750,420,'afigisiScreen10');
             afigisiScreen10.anchor.setTo(0.5,0.5);
             if(n!=8){
                 n=12;
                 }
        });
       }
        if(n==12){
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen6 = game.add.sprite(750,420,'afigisiScreen6');
             afigisiScreen6.anchor.setTo(0.5,0.5);
             if(n!=8){
                 n=13;
                 }
        }); 
        }
        if(n==13){
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen9 = game.add.sprite(750,420,'afigisiScreen9');
             afigisiScreen9.anchor.setTo(0.5,0.5);
             if(n!=8){
                 n=14;
                 }
        });
        }
        if(n==14){
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen11 = game.add.sprite(750,420,'afigisiScreen11');
             afigisiScreen11.anchor.setTo(0.5,0.5);
             if(n!=8){
                 n=15;
                 }
        });
        }
        if(n==15){
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen7 = game.add.sprite(750,420,'afigisiScreen7');
             afigisiScreen7.anchor.setTo(0.5,0.5);
             if(n!=8){
                 n=16;
                 }
        }); 
        }
        if(n==16){
         this.time.events.add(Phaser.Timer.SECOND * 4, function(){
             afigisiScreen3 = game.add.sprite(750,420,'afigisiScreen3');
             afigisiScreen3.anchor.setTo(0.5,0.5);
             if(n!=8){
                 n=17;
                 }
        }); 
        }
        if(n==17){
        this.time.events.add(Phaser.Timer.SECOND * 4,function(){
           afigisiScreen8 = game.add.sprite(750,420,'afigisiScreen8');
             afigisiScreen8.anchor.setTo(0.5,0.5);
        n=3;
        });
        }
           // this.createButton(game,"Skip Intro",game.world.centerX,game.world.centerY + 100, 300, 100, function(){
             //n=8;
        //});
        mybutton = game.add.button(350,520 , 'skipButton', this.actionOnClick, this, 2, 1, 0);
        
        if(n==8){
           
             // this.time.events.add(Phaser.Timer.SECOND * 4,function(){
           afigisiScreen8 = game.add.sprite(750,420,'afigisiScreen8');
             afigisiScreen8.anchor.setTo(0.5,0.5);
        n=3;
        //});
        }
        
        if(n==4){
            afigisiScreen4 = game.add.sprite(750,420,'afigisiScreen4');
             afigisiScreen4.anchor.setTo(0.5,0.5);
        n=2;
        }
       if(n==2){
            this.createButton2(game,"Mario",140,170, 268, 338, function(){
            this.state.start('Level1');
                pl = 1;
               });
           
           this.createButton3(game,"Luigi",540,170, 268, 338, function(){
            this.state.start('Level1');
               pl = 2;
        });
       }
        if(n==1){
            this.state.start('Level1');
        }
    
    
    if(n==3){
         this.createButton(game,"2",1050,100, 300, 100, function(){
            x=2;
             n=4;
        });
        
         this.createButton(game,"3",1050,250, 300, 100, function(){
            x=3;
             n=4;
        });
        
         this.createButton(game,"5",1050,400 , 300, 100, function(){
            x=5;
             n=4;
        });
        
         this.createButton(game,"10",1050,550 , 300, 100, function(){
            x=10;
             n=4;
        });
    }
    },
    
    createButton2:function(game,string,x,y,w,h,callback){
        var button1 = game.add.button(x,y,'marioButton',callback,this,2,1,0);
        
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x,button1.y, string, {font:"14px Arial" , fill:"#fff", align:"center"});
        
        txt.anchor.setTo(0.5,0.5);
    },
    
    createButton3:function(game,string,x,y,w,h,callback){
        var button1 = game.add.button(x,y,'luigiButton',callback,this,2,1,0);
        
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x,button1.y, string, {font:"14px Arial" , fill:"#fff", align:"center"});
        
        txt.anchor.setTo(0.5,0.5);
    },
    
     createButton:function(game,string,x,y,w,h,callback){
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
        
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x,button1.y, string, {font:"14px Arial" , fill:"#fff", align:"center"});
        
        txt.anchor.setTo(0.5,0.5);
    },
    actionOnClick:function(game){
        music.stop();
        this.state.start('afigisi');
        mybutton.visible = false;
        
        n=8;
      
    }
    
   
};
