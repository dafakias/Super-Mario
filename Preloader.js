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
        
        this.load.tilemap('map','assets/FirstLevel.json',null,Phaser.Tilemap.TILED_JSON);
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
        
        this.load.image('coin10','assets/coin10.png');
        
        this.load.image('coin15','assets/coin15.png');
        
        this.load.image('coin27','assets/coin27.png');
        
        this.load.image('coin8','assets/coin8.png');
        
        this.load.image('coin12','assets/coin12.png');
        
        this.load.image('coin24','assets/coin24.png');
        
        this.load.image('coin16','assets/coin16.png');
        
        this.load.image('coin18','assets/coin18.png');
        
        this.load.image('coin20','assets/coin20.png');
        
        this.load.image('coin30','assets/coin30.png');
        
        this.load.image('coin35','assets/coin35.png');
        
        this.load.image('coin40','assets/coin40.png');
        
        this.load.image('coin45','assets/coin45.png');
        
        this.load.image('coin50','assets/coin50.png');
        
        this.load.image('coin21','assets/coin21.png');
        
        this.load.image('coin6','assets/coin6.png');
        
        this.load.image('coin14','assets/coin14.png');
        
        this.load.image('wall','assets/wall.jpeg');
        
        this.load.image('luckybox','assets/luckybox.png');
        
        this.load.image('luckybox2','assets/luckybox2.png');
        
        this.load.image('flag','assets/flag.png');
        
        this.load.image('key','assets/key.png');
        
        this.load.spritesheet('raccoon','assets/raccoon.png',23.75,32.25);
        
        this.load.image('gameoverScreen','assets/gameoverScreen.png');
        
        this.load.image('lossScreen','assets/lossScreen.png');
        
        this.load.image('backround','assets/backround.png');
        
        this.load.image('backround3','assets/backround3.png');
        
        this.load.image('turtle','assets/turtle.png');
        
        this.load.image('playagain','assets/playagain.png');
        
        this.load.image('afigisiScreen','assets/afigisiScreen.png');
        
        this.load.image('afigisiScreen2','assets/afigisiScreen2.png');
        
        this.load.image('afigisiScreen3','assets/afigisiScreen3.png');
        
        this.load.image('afigisiScreen4','assets/afigisiScreen4.png');
        
        this.load.image('afigisiScreen5','assets/afigisiScreen5.png');
        
        this.load.image('afigisiScreen6','assets/afigisiScreen6.png');
        
        this.load.image('afigisiScreen7','assets/afigisiScreen7.png');
        
        this.load.image('luigiButton','assets/luigiButton2.png');
        
        this.load.image('marioButton','assets/marioButton2.png');
        
        this.load.image('backround2','assets/backround2.png');
        
        this.load.image('elevator','assets/elevator.png');
        
        this.load.image('propel','assets/propel.png');
        
        this.load.image('brick','assets/brick.jpg');
        
        this.load.spritesheet('luigi','assets/luigi.png',28,35.5);
        
        this.load.spritesheet('super','assets/super.png',27,34);
        
        this.load.spritesheet('flame','assets/flame.png',35,60);
        
        this.load.spritesheet('goomba','assets/goomba.png',16,16);
        
        this.load.spritesheet('water','assets/water2.png',372.6,322);
        
        this.load.image('div2','assets/div2.png');
        
        this.load.image('div3','assets/div3.png');
        
        this.load.image('div5','assets/div5.png');
        
        this.load.audio('song','assets/song.mp3');
        
        this.load.audio('victory','assets/victory.mp3');
        
        this.load.audio('lose','assets/lose.mp3');
        
        this.load.audio('helicopter','assets/helicopter.mp3');
        
        this.load.audio('fall','assets/fall.mp3');
        
        this.load.audio('break','assets/break.mp3');
        
        this.load.audio('hit','assets/hit.mp3');
        
        this.load.audio('hitenemy','assets/hitenemy.mp3');
        
        this.load.image('controlsScreen','assets/controlsScreen.png');
        
        this.load.image('heart','assets/heart.png');
        
        
    },
    
    create:function(){
        
        this.state.start('MainMenu');
    }
}