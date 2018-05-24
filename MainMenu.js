Game.MainMenu = function(game){
    
};


var titlescreen;
var backround2;

Game.MainMenu.prototype = {
    create:function(game){
     
        backround2 = this.add.tileSprite(0,0,1300,800,'backround2');
         titlescreen = game.add.sprite(650,200,'titlescreen');
        titlescreen.anchor.setTo(0.5,0.5);
       
        
        this.createButton(game,"Play",650,450, 300, 100, function(){
            this.state.start('afigisi');
        });
        
         this.createButton(game,"Controls",650,600, 300, 100, function(){
            this.state.start('controls');
        });
        
       
  
    },
    
    update:function(game){
        
    },
    createButton:function(game,string,x,y,w,h,callback){
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
        
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x,button1.y, string, {font:"14px Arial" , fill:"#fff", align:"center"});
        
        txt.anchor.setTo(0.5,0.5);
    }
    
};
