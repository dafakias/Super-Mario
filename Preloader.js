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
        
        this.load.tilemap('map','assets/Level1.csv');
        this.load.image('tileset','assets/super_mario_tiles.png');
        
        this.load.spritesheet('player','assets/player.png',24,26);
        
        this.load.image('bird','assets/bird.png'); 
        
        this.load.image('titlescreen','assets/titlescreen.png');
        
        this.load.image('button','assets/button.png');
        
        this.load.audio('coin','assets/coin.wav');
        
        this.load.audio('jump','assets/jump.wav');
        
        
    },
    
    create:function(){
        
        this.state.start('MainMenu');
    }
}