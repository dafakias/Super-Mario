Game.afigisi = function(game){
    
};


var afigisiScreen;
var afigisiScreen2;
var afigisiScreen3;
var afigisiScreen4;
var afigisiScreen5;
var afigisiScreen6;
var afigisiScreen7;
var n=0;
var pl;
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
             afigisiScreen5 = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen5');
             afigisiScreen5.anchor.setTo(0.5,0.5);
        });
        
         this.time.events.add(Phaser.Timer.SECOND * 12, function(){
             afigisiScreen6 = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen6');
             afigisiScreen6.anchor.setTo(0.5,0.5);
        }); 
        
         this.time.events.add(Phaser.Timer.SECOND * 16, function(){
             afigisiScreen7 = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen7');
             afigisiScreen7.anchor.setTo(0.5,0.5);
        }); 
        
         this.time.events.add(Phaser.Timer.SECOND * 20, function(){
             afigisiScreen3 = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen3');
             afigisiScreen3.anchor.setTo(0.5,0.5);
        }); 
       
        this.time.events.add(Phaser.Timer.SECOND * 24,function(){
           afigisiScreen4 = game.add.sprite(game.world.centerX +100,game.world.centerY + 25,'afigisiScreen4');
             afigisiScreen4.anchor.setTo(0.5,0.5);
        n=2;
        });
        
    
       
  
    },
    
    update:function(game){
        
       if(n==2){
            this.createButton2(game,"Mario",game.world.centerX-500,game.world.centerY - 230, 268, 338, function(){
            this.state.start('Level1');
                pl = 1;
               });
           
           this.createButton3(game,"Luigi",game.world.centerX-100,game.world.centerY - 230, 268, 338, function(){
            this.state.start('Level1');
               pl = 2;
        });
       }
        if(n==1){
            this.state.start('Level1');
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
    }
    
   
};
