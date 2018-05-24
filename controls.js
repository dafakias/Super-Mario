Game.controls = function(game){
    
};


var controlsScreen;

Game.controls.prototype = {
    create:function(game){
        this.stage.backgroundColor = "#000000";
         controlsScreen = game.add.sprite(650,500,'controlsScreen');
        controlsScreen.anchor.setTo(0.5,0.5);
        
        this.createButton(game,"Play",650,50, 300, 100, function(){
            this.state.start('afigisi');
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
