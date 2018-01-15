//var game = {};

Game.Preloader = function(game){
    
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload:function(){
        
        this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');
        
        this.preloadBar.anchor.setTo(0.5,0.5);
        
        this.time.advancedTiming = true;
        
        this.load.setPreloadSprite(this.preloadBar);
        
        //LOAD ALL ASSETS
        
        this.load.tilemap('map','assets/FirstLevel.csv');
        this.load.image('tileset','assets/GoldBricks.png');
        
        this.load.spritesheet('player','assets/player.png',24,26);
        
        this.load.image('bird','assets/bird.png'); 
        
        this.load.image('titlescreen','assets/titlescreen.png');
        
        this.load.image('button','assets/button.png');
        
        this.load.image('bullet','assets/bullet.png');
        
        this.load.audio('coin','assets/coin.wav');
        
        this.load.audio('jump','assets/jump.wav');
        
        this.load.audio('stomp','assets/stomp.wav');
        
        this.load.image('coin25','assets/coin25.png');
        
        this.load.image('coin9','assets/coin9.png');
        
        this.load.image('coin1','assets/coin1.png');
        
        this.load.image('coin4','assets/coin4.png');
        
        this.load.image('coin36','assets/coin36.png');
        
        
    },
    
    create:function(){
        
        this.state.start('MainMenu');
    }
}