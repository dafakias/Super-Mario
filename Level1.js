//var game = {};

 


EnemyBird = function(index,game,x,y){
  this.bird = game.add.sprite(x,y,'turtle');
    this.bird.scale.setTo(0.15);
  this.bird.anchor.setTo(0.5,0.5);
  this.bird.name = index.toString();
  game.physics.enable(this.bird,Phaser.Physics.ARCADE);
  this.bird.body.immovable = true;  
  this.bird.body.collideWorldBounds = true;   
  this.bird.body.allowGravity = false;    
    
  this.birdTween = game.add.tween(this.bird).to({x: this.bird.x + 100},2000,'Linear',true,0,100,true);    
}


var enemy1;
var enemy2;
var enemy3;
var enemy4;


Game.Level1 = function(game){};

var map;
var layer;
var player;
var controls = {};
var playerSpeed = 150;
var jumpTimer = 0;
var shootTime = 0;
var bullets;
var min = 2;
var max = 6;
var x;
var xText;
var r;
var tixi;
var fly=0;
var score = 0;
var scoreText;
var life = 3;
var lifeText;
var heart;
var heart2;
var coins;
var coinNumber36;
var coinNumber1;
var coinNumber10;
var coinNumber9;
var coinNumber4;
var coinNumber362;
var coinNumber42;
var coinNumber25;
var coinNumber102;
var coinNumber15;
var coinNumber27;
var coinNumber8;
var coinNumber12;
var coinNumber24;
var coinNumber16;
var coinNumber18;
var coinNumber252;
var coinNumber242;
var coinNumber92;
var coinNumber20;
var coinNumber30;
var coinNumber35;
var coinNumber40;
var coinNumber45;
var coinNumber50;
var coinNumber21;
var coinNumber272;
var coinNumber352;
var coinNumber452;
var coinNumber6;
var coinNumber14;
var div2;
var div3;
var div5;
var flame;
var flame2;
var goomba;
var elevator;
var propel;
var brick;
var brick2;
var brick3;
var raccoon;
var key;
var lathos = 0;
var sum2 = 0;
var sum3 = 0;
var sum5 = 0;
var music;
var victory;
var lose;
var backround;
var telos;
var flag;
var luckybox;
var luckybox2;
var audioCoin;
var audioStomp;
var helicopter;
var break1;
var hit;
var hitenemy;
var fall;
var lathos2;
var lathos3;
var lathos5;
var kappa = 0;
var water;
var backround2;
var l5 = 0;
var l2 = 0;
var l3 = 0;

Game.Level1.prototype = {
    
    create:function(game){
       this.stage.backgroundColor = '#3A5963';
        
        backround = this.add.tileSprite(0,0,4000,800,'backround');
        backround2 = this.add.tileSprite(3800,0,3200,800,'backround3');
        div2 = this.add.sprite(500,100,'div2');
        div3 = this.add.sprite(500,100,'div3');
        div5 = this.add.sprite(500,100,'div5');
        div2.visible = false;
        div3.visible = false;
        div5.visible = false;
        
         lathos2 = this.add.sprite(400,100,'lathos2');
        lathos3 = this.add.sprite(400,100,'lathos3');
        lathos5 = this.add.sprite(400,100,'lathos5');
        lathos2.visible = false;
        lathos3.visible = false;
        lathos5.visible = false;
        
        this.physics.arcade.gravity.y = 1400;
        
        map = this.add.tilemap('map');
        map.addTilesetImage('GoldBricks','tileset');
        layer = map.createLayer('Tile Layer 1');
        layer.resizeWorld();
        
        map.setCollisionBetween(28,29);
        map.setCollisionBetween(59,60);
        map.setCollisionBetween(19,20);
       
        
        map.setTileIndexCallback(3,this.resetPlayer,this);
        map.setTileIndexCallback(1,this.notFly);
        map.setTileIndexCallback(56,this.getCoin,this);
       
        
      
        //map.setTileIndexCallback(63,this.getCoin3,this);
        //map.setTileIndexCallback(64,this.getCoin4,this);
        //map.setTileIndexCallback(55,this.getCoin5,this);
        //map.setTileIndexCallback(54,this.getCoin6,this);
        //map.setTileIndexCallback(38,this.getCoin7,this);
        //map.setTileIndexCallback(48,this.getCoin8,this);
        //map.setTileIndexCallback(47,this.getCoin9,this);
        //map.setTileIndexCallback(40,this.getCoin10,this);
        //map.setTileIndexCallback(61,this.getCoin11,this);
        //map.setTileIndexCallback(46,this.getCoin12,this);
        //map.setTileIndexCallback(39,this.getCoin13,this);
        //map.setTileIndexCallback(9,this.showCoin25,this);
        
        map.setTileIndexCallback(4,this.speedPowerup,this);
        
        //music = this.add.audio('song');
       // music.play();
        victory = this.add.audio('victory');
        lose = this.add.audio('lose');
        audioCoin = this.add.audio('coin');
        audioStomp = this.add.audio('stomp');
        helicopter = this.add.audio('helicopter');
        fall = this.add.audio('fall');
        break1 = this.add.audio('break');
        hit = this.add.audio('hit');
        hitenemy = this.add.audio('hitenemy');
        
        //coins = game.add.group();
        //map.createFromObjects('Object Layer 1',1,'coin',0,true,false,coins);
        if(pl==1){
            player = this.add.sprite(100,500,'super');
            player.anchor.setTo(0.5,0.5);
            player.animations.add('idle',[0],1,true);
            player.animations.add('jump',[10],1,true);
            player.animations.add('run', [2,5,6,1],5,true);
        }
        if(pl==2){
            player= this.add.sprite(100,500,'luigi');
            player.animations.add('idle',[8],1,true);
            player.animations.add('jump',[14],1,true);
            player.animations.add('run', [9,10,11,12,13],6,true);
        }
        player.anchor.setTo(0.5,0.5);
       
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
        flame = this.add.sprite(930,600,'flame');
        flame.anchor.setTo(0.5,0.5);
        flame.animations.add('walk');
        flame.animations.play('walk',12,true);
        this.physics.arcade.enable(flame);
        flame.body.allowGravity = false;
        this.add.tween(flame).to({y: flame.y - 200},2000,'Linear',true,0,100,true);
        flame.body.immovable = true;
        
         flame2 = this.add.sprite(2650,600,'flame');
        flame2.anchor.setTo(0.5,0.5);
        flame2.animations.add('walk');
        flame2.animations.play('walk',12,true);
        this.physics.arcade.enable(flame2);
        flame2.body.allowGravity = false;
        this.add.tween(flame2).to({y: flame2.y - 200},2000,'Linear',true,0,100,true);
        flame2.body.immovable = true;
        
        goomba = this.add.sprite(1330,430,'goomba');
        goomba.scale.setTo(2);
        goomba.anchor.setTo(0.5,0.5);
        goomba.animations.add('walk');
        goomba.animations.play('walk',8,true);
        this.physics.arcade.enable(goomba);
        goomba.body.allowGravity = false;
        this.add.tween(goomba).to({x: goomba.x + 400},5000,'Linear',true,0,100,true);
        goomba.body.immovable = true;
        
         raccoon = this.add.sprite(3680,620,'raccoon');
        raccoon.scale.setTo(2);
        raccoon.anchor.setTo(0.5,0.5);
        raccoon.animations.add('walk',[0,1,2,3],5,true);
        raccoon.animations.play('walk',3,true);
        this.physics.arcade.enable(raccoon);
        raccoon.body.allowGravity = false;
        this.add.tween(raccoon).to({x: raccoon.x + 300},5000,'Linear',true,0,100,true);
        raccoon.body.immovable = true;
        
        water = this.add.sprite(4575,650,'water');
        water.anchor.setTo(0.5,0.5);
        water.scale.setTo(0.86);
        water.animations.add('walk');
        water.animations.play('walk',4,true);
        this.physics.arcade.enable(water);
        water.body.allowGravity = false;
        water.body.immovable = true;
        
        elevator = this.add.sprite(2880,260,'elevator');
        this.physics.arcade.enable(elevator);
        elevator.body.allowGravity = false;
        elevator.body.immovable = true;
        
        propel = this.add.sprite(3200,550,'propel');
        propel.scale.setTo(0.1);
        propel.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(propel);
        propel.body.allowGravity = false;
        propel.body.immovable = true;
        propel.body.collideWorldBounds = true;
        
        
        
        scoreText = game.add.text(15,200,'Score:0',{fontSize: '32px',fill : '#000'});
        xText = game.add.text(15,100,'x=',{fontSize: '32px',fill : '#000'});
        lifeText = game.add.text(50,300,'l=',{fontSize: '32px',fill : '#000'});
        
        
        
        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            left: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            up: this.input.keyboard.addKey(Phaser.Keyboard.UP),
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.w),
            down:this.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        };
        
        
        enemy1 = new EnemyBird(0,game,player.x+50,player.y +120);
        enemy2 = new EnemyBird(0,game,player.x+1030,player.y +120);
        enemy3 = new EnemyBird(0,game,player.x+1750,player.y +120);
        enemy4 = new EnemyBird(0,game,player.x+2150,player.y +120);
        
        bullets = game.add.group();
        
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(5,'bullet');
        bullets.setAll('anchor.x',0.5);
        bullets.setAll('anchor.y',0.5);
        
        bullets.setAll('outOfBoundsKill',true);
        bullets.setAll('checkWorldBounds',true);
        
        tixi = Math.floor(Math.random() * 2 + 1);
        
        r = Math.floor(Math.random() * 3) + 1;
        if(r==1){
            x=2;
        }
        if(r==2){
            x=3;
        }
        if(r==3){
            x=5;
        }
        xText.text = 'x= ' + x;
        
        if(x==2){
            div2.visible = true;
            this.time.events.add(Phaser.Timer.SECOND * 6, function(){
            div2.visible = false;
        }); 
        }
        
        if(x==3){
            div3.visible = true;
            this.time.events.add(Phaser.Timer.SECOND * 6, function(){
            div3.visible = false;
        }); 
        }
        
        if(x==5){
            div5.visible = true;
            this.time.events.add(Phaser.Timer.SECOND * 6, function(){
            div5.visible = false;
        }); 
        }
        
        lifeText.text =  life;
       
        
        xText.fixedToCamera = true;
        scoreText.fixedToCamera = true;
        lifeText.fixedToCamera = true;
        
        heart = this.add.sprite(25,320,'heart');
        heart.anchor.setTo(0.5,0.5);
        heart.scale.setTo(0.5);
        heart.fixedToCamera = true;
        
    
        //this.coinNumber1 = this.game.add.sprite(100, 50, 'coin25');
        
        //this.coinNumber2 = this.game.add.sprite(170,50,'coin9');
        
        //this.coinNumber3 = this.game.add.sprite(240,50,'coin4');
        
        //this.coinNumber4 = this.game.add.sprite(310,50,'coin1');
        
        heart2 = this.add.sprite(1080,400,'heart');
        heart2.scale.setTo(0.5);
        this.physics.arcade.enable(heart2);
        heart2.body.allowGravity = false;
        
        
        if(tixi==1){
            coinNumber36 = this.game.add.sprite(1750,380,'coin36');
            coinNumber50 = this.game.add.sprite(4620,280,'coin50');
            coinNumber10 = this.game.add.sprite(3650,100,'coin10');
            coinNumber9 = this.game.add.sprite(800,480,'coin9');
            coinNumber4 = this.game.add.sprite(310,380,'coin4');
            coinNumber362 = this.game.add.sprite(1180,550,'coin36');
            coinNumber452 = this.game.add.sprite(2750,550,'coin45');
            coinNumber25 = this.game.add.sprite(1480,550,'coin25');
            coinNumber102 = this.game.add.sprite(1300,380,'coin10');
            coinNumber15 = this.game.add.sprite(1470,380,'coin15');
            coinNumber27 = this.game.add.sprite(1600,380,'coin27');
            coinNumber8 = this.game.add.sprite(380,550,'coin8');
            coinNumber12 = this.game.add.sprite(1950,550,'coin12');
            coinNumber24 = this.game.add.sprite(3450,100,'coin24');
            coinNumber352 = this.game.add.sprite(2350,550,'coin35');
            coinNumber18 = this.game.add.sprite(2450,230,'coin18');
            coinNumber20 = this.game.add.sprite(1680,550,'coin20');
            coinNumber30 = this.game.add.sprite(2790,290,'coin30');
            coinNumber35 = this.game.add.sprite(3600,410,'coin35');
            coinNumber40 = this.game.add.sprite(3870,100,'coin40');
            coinNumber45 = this.game.add.sprite(2150,550,'coin45');
            coinNumber92 = this.game.add.sprite(2050,300,'coin9');
            coinNumber21 = this.game.add.sprite(3800,410,'coin21');            
            coinNumber272 = this.game.add.sprite(4320,330,'coin27');            
            coinNumber6 = this.game.add.sprite(580,550,'coin6');            
            coinNumber14 = this.game.add.sprite(4900,410,'coin14');            
            coinNumber252 = this.game.add.sprite(4000,300,'coin25');

        }
        
        if(tixi==2){
            coinNumber36 = this.game.add.sprite(1680,550,'coin36');
            coinNumber50 = this.game.add.sprite(800,480,'coin50');
            coinNumber10 = this.game.add.sprite(1180,550,'coin10');
            coinNumber9 = this.game.add.sprite(580,550,'coin9');
            coinNumber4 = this.game.add.sprite(310,380,'coin4');
            coinNumber362 = this.game.add.sprite(3600,410,'coin36');
            coinNumber452 = this.game.add.sprite(2450,230,'coin45');
            coinNumber25 = this.game.add.sprite(1950,550,'coin25');
            coinNumber102 = this.game.add.sprite(4620,280,'coin10');
            coinNumber15 = this.game.add.sprite(2150,550,'coin15');
            coinNumber27 = this.game.add.sprite(2750,550,'coin27');
            coinNumber8 = this.game.add.sprite(380,550,'coin8');
            coinNumber12 = this.game.add.sprite(3450,100,'coin12');
            coinNumber24 = this.game.add.sprite(2790,290,'coin24');
            coinNumber352 = this.game.add.sprite(1480,550,'coin35');
            coinNumber18 = this.game.add.sprite(1600,380,'coin18');
            coinNumber20 = this.game.add.sprite(1470,380,'coin20');
            coinNumber30 = this.game.add.sprite(2350,550,'coin30');
            coinNumber35 = this.game.add.sprite(3650,100,'coin35');
            coinNumber40 = this.game.add.sprite(4900,410,'coin40');
            coinNumber45 = this.game.add.sprite(3870,100,'coin45');
            coinNumber92 = this.game.add.sprite(2050,300,'coin9');
            coinNumber21 = this.game.add.sprite(1750,380,'coin21');            
            coinNumber272 = this.game.add.sprite(3800,410,'coin27');            
            coinNumber6 = this.game.add.sprite(1300,380,'coin6');            
            coinNumber14 = this.game.add.sprite(4320,330,'coin14');            
            coinNumber252 = this.game.add.sprite(4000,300,'coin25');

        }
        
        coinNumber36.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber36);
        coinNumber36.body.allowGravity = false;
        
        coinNumber50.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber50);
        coinNumber50.body.allowGravity = false;
        
        coinNumber10.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber10);
        coinNumber10.body.allowGravity = false;
        
        coinNumber9.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber9);
        coinNumber9.body.allowGravity = false;
        
        coinNumber4.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber4);
        coinNumber4.body.allowGravity = false;
        
        coinNumber362.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber362);
        coinNumber362.body.allowGravity = false;
        
        coinNumber452.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber452);
        coinNumber452.body.allowGravity = false;
        
        coinNumber25.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber25);
        coinNumber25.body.allowGravity = false;
        
        coinNumber102.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber102);
        coinNumber102.body.allowGravity = false;
        
        coinNumber15.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber15);
        coinNumber15.body.allowGravity = false;
        
        coinNumber27.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber27);
        coinNumber27.body.allowGravity = false;
        
        coinNumber8.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber8);
        coinNumber8.body.allowGravity = false;
        
        coinNumber12.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber12);
        coinNumber12.body.allowGravity = false;
        
        coinNumber24.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber24);
        coinNumber24.body.allowGravity = false;
        
        coinNumber352.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber352);
        coinNumber352.body.allowGravity = false;
        
        
        coinNumber18.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber18);
        coinNumber18.body.allowGravity = false;
        
        coinNumber20.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber20);
        coinNumber20.body.allowGravity = false;
        
        coinNumber30.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber30);
        coinNumber30.body.allowGravity = false;
        
        coinNumber35.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber35);
        coinNumber35.body.allowGravity = false;
        
        coinNumber40.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber40);
        coinNumber40.body.allowGravity = false;
        
        coinNumber45.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber45);
        coinNumber45.body.allowGravity = false;
        
        coinNumber21.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber21);
        coinNumber21.body.allowGravity = false;
        
       coinNumber272.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber272);
        coinNumber272.body.allowGravity = false;
        
        coinNumber6.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber6);
        coinNumber6.body.allowGravity = false;
        
        coinNumber14.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber14);
        coinNumber14.body.allowGravity = false;
        
        coinNumber92.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber92);
        coinNumber92.body.allowGravity = false;
        coinNumber92.visible = false;
        
        coinNumber252.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber252);
        coinNumber252.body.allowGravity = false;
        coinNumber252.visible = false;
        
       
        
        luckybox = this.game.add.sprite(2050,450,'luckybox');
        this.physics.arcade.enable(luckybox);
        luckybox.body.allowGravity = false;
        luckybox.body.immovable = true;
        
        luckybox2 = this.game.add.sprite(4000,450,'luckybox2');
        this.physics.arcade.enable(luckybox2);
        luckybox2.body.allowGravity = false;
        luckybox2.body.immovable = true;
       
        brick = this.game.add.sprite(3535,450,'brick');
        brick.scale.setTo(0.38);
        this.physics.arcade.enable(brick);
        brick.body.allowGravity = false;
        brick.body.immovable = true;
        
        brick2 = this.game.add.sprite(3735,450,'brick');
        brick2.scale.setTo(0.38);
        this.physics.arcade.enable(brick2);
        brick2.body.allowGravity = false;
        brick2.body.immovable = true;
        
        brick3 = this.game.add.sprite(4435,450,'wall');
        brick3.scale.setTo(0.25);
        this.physics.arcade.enable(brick3);
        brick3.body.allowGravity = false;
        brick3.body.immovable = true;
        this.add.tween(brick3).to({x: brick3.x + 150},5000,'Linear',true,0,100,true);
        
        
        
        key = this.game.add.sprite(4980,530,'key');
        key.anchor.setTo(0.5,0.5);
        key.scale.setTo(0.1);
        this.physics.arcade.enable(key);
        key.body.allowGravity = false;
        key.visible = false;
        
        
        
        
         flag = this.game.add.sprite(4980,530,'flag');
        flag.scale.setTo(0.5);
        this.physics.arcade.enable(flag);
        flag.body.allowGravity = false;
        
        
        
        
        
    },
        
    update:function(){
        
        this.physics.arcade.collide(player,layer);
        this.physics.arcade.collide(propel,layer);
        this.physics.arcade.collide(player,enemy1.bird,this.resetPlayer);
        this.physics.arcade.collide(player,enemy2.bird,this.resetPlayer);
         this.physics.arcade.collide(player,enemy3.bird,this.resetPlayer);
         this.physics.arcade.collide(player,enemy4.bird,this.resetPlayer);
        this.physics.arcade.collide(player,flame,this.flame);
        this.physics.arcade.collide(player,flame2,this.flame);
        this.physics.arcade.collide(player,goomba,this.goomba);
        this.physics.arcade.collide(player,elevator,this.elevator);
        this.physics.arcade.collide(player,propel,this.propel);
        this.physics.arcade.collide(player,brick,this.break);
        this.physics.arcade.collide(player,brick2,this.break2);
        this.physics.arcade.collide(player,brick3,this.break3);
        this.physics.arcade.collide(player,water,this.flame);
        this.physics.arcade.collide(player,raccoon,this.raccoon);
        
        player.body.velocity.x = 0;
        
        
        
       
        
        this.physics.arcade.collide(player,coinNumber36,this.killCoin);
        this.physics.arcade.collide(player,coinNumber50,this.killCoin50);
        this.physics.arcade.collide(player,coinNumber10,this.killCoin10);
        this.physics.arcade.collide(player,coinNumber9,this.killCoin9);
        this.physics.arcade.collide(player,coinNumber4,this.killCoin4);
        this.physics.arcade.collide(player,coinNumber362,this.killCoin);
        this.physics.arcade.collide(player,coinNumber452,this.killCoin452);
        this.physics.arcade.collide(player,coinNumber25,this.killCoin25);
        this.physics.arcade.collide(player,coinNumber102,this.killCoin102);
        this.physics.arcade.collide(player,coinNumber15,this.killCoin15);
        this.physics.arcade.collide(player,coinNumber27,this.killCoin27);
        this.physics.arcade.collide(player,coinNumber8,this.killCoin8);
        this.physics.arcade.collide(player,coinNumber12,this.killCoin12);
        this.physics.arcade.collide(player,coinNumber24,this.killCoin24);
        this.physics.arcade.collide(player,coinNumber352,this.killCoin352);
        this.physics.arcade.collide(player,coinNumber18,this.killCoin18);
        this.physics.arcade.collide(player,coinNumber252,this.killCoin252);
        this.physics.arcade.collide(player,heart2,this.killheart2);
        this.physics.arcade.collide(player,luckybox,this.luckybox);
        this.physics.arcade.collide(player,luckybox2,this.luckybox2);
        this.physics.arcade.collide(player,coinNumber92,this.killCoin92);
        this.physics.arcade.collide(player,coinNumber20,this.killCoin20);
        this.physics.arcade.collide(player,coinNumber30,this.killCoin30);
        this.physics.arcade.collide(player,coinNumber35,this.killCoin35);
        this.physics.arcade.collide(player,coinNumber40,this.killCoin40);
        this.physics.arcade.collide(player,coinNumber45,this.killCoin45);
        this.physics.arcade.collide(player,coinNumber21,this.killCoin21);
        this.physics.arcade.collide(player,coinNumber272,this.killCoin272);
        this.physics.arcade.collide(player,coinNumber6,this.killCoin6);
        this.physics.arcade.collide(player,coinNumber14,this.killCoin14);
        
        
        this.physics.arcade.collide(player,flag,this.killFlag);
         this.physics.arcade.collide(player,key,this.killFlag);
        
        if(l5==1){
             this.time.events.add(Phaser.Timer.SECOND * 4, function(){
            lathos5.visible = false;
                 l5 =0;
        }); 
        }
        
        if(l3==1){
             this.time.events.add(Phaser.Timer.SECOND * 4, function(){
            lathos3.visible = false;
                 l3 =0;
        }); 
        }
        
        if(l2==1){
             this.time.events.add(Phaser.Timer.SECOND * 4, function(){
            lathos2.visible = false;
                 l2 =0;
        }); 
        }
        
        if(sum2>=10 || sum3>=10 || sum5>=10){
            key.visible = true;
            key.angle +=2;
            flag.visible = false;
        }
        
        if(telos==1){
            music.stop();
            if(sum2>=11 || sum3>=10 || sum5>=8){
            victory.play();
            this.state.start('gameover');
            }
        else{
            lose.play();
            this.state.start('loss');
        }    
            telos=0;
            score=0;
            life=3;
            //sum2=0;
            //sum3=0;
            //sum5=0;
        }
        
        if(life==0){
            music.stop();
            lose.play();
            this.state.start('loss');
            life=3;
            score=0;
            //sum2=0;
            //sum3=0;
            //sum5=0;
        
        }
         
        
        
        
        if(controls.right.isDown){
            if(fly==1){
                player.body.allowGravity = false;
                propel.body.allowGravity = false;
                player.body.x +=4;
                propel.body.x +=4;
                player.body.velocity.x =10;
                propel.body.velocity.x =10;
            }
            else{
            player.animations.play('run');
            player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed;
            }
        }
        
         if(controls.left.isDown){
             if(fly==1){
                 player.body.x -=4;
                 player.body.allowGravity = false;
                 propel.body.x -=4;
                 propel.body.allowGravity = false;
                 player.body.velocity.x = -10;
                propel.body.velocity.x = -10;    
             }
             else{
            player.animations.play('run');
            player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;             
             }
        }
        
        if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer && fly ==0){
            player.body.velocity.y = -800;
            jumpTimer = this.time.now + 750;
            player.animations.play('jump');
            this.sound.play('jump');
            
        }
        
        if(controls.up.isDown && fly ==1){
            player.body.y -=4;
            player.body.allowGravity = false;
             propel.body.y -=4;
            propel.body.allowGravity = false;
            player.body.velocity.y = -10;
                propel.body.velocity.y = -10;
        }
        
        if(controls.down.isDown && fly ==1){
           player.body.y +=4;
            player.body.allowGravity = false;
             propel.body.y +=4;
            propel.body.allowGravity = false;
            player.body.velocity.y =10;
                propel.body.velocity.y =10;
        }
        
        if(player.body.velocity.x == 0 && player.body.velocity.y ==0){
            player.animations.play('idle');
        }
        
        //if(checkOverlap(player,enemy1.bird)){
          //  this.resetPlayer();
       // }
        
       // if(controls.shoot.isDown){
        //    this.shootBullet();
       // }
        
        if(checkOverlap(bullets,enemy1.bird)){
            enemy1.bird.kill();
            
        }
        
     
        //}
        
        // if(checkOverlap(bullets,this.coinNumber2)){
          //  if(x==3){
            //this.coinNumber2.kill();
             //   score += 100;
       // this.sound.play('coin');
            //}
        //}
        
        
        
    },    
    
    
    resetPlayer:function(player,enemy1){ 
        if(player.body.touching.down){
            hitenemy.play();
            enemy1.kill();
         
        }
        else{
        player.reset(100,560);
        life = life -1;
         lifeText.text = life;
        lose.play();
        }
    },
    
     goomba:function(player,goomba){ 
        if(player.body.touching.down){
            hitenemy.play();
            goomba.kill();
         
        }
        else{
        player.reset(100,560);
        life = life -1;
         lifeText.text = life;
        lose.play();
        }
    },
    
    raccoon:function(player,raccoon){ 
        if(player.body.touching.down){
            hitenemy.play();
            raccoon.kill();
         
        }
        else{
        player.reset(100,560);
        life = life -1;
         lifeText.text = life;
        lose.play();
        }
    },
    
    killFlag:function(){       
       telos = 1;
        
    },
    
    break:function(){
        break1.play();
        brick.kill();
    },
    
     break2:function(){
         break1.play();
        brick2.kill();
    },
    
     break3:function(){
        kappa = 1;
    },
   
    propel:function(player,propel){
     if(player.body.touching.up){
        fly = 1;
       propel.body.center.x = player.body.center.x;
       propel.body.center.y = player.body.center.y;
       helicopter.play();

     }
    },
    
    notFly:function(){
        fly = 0;
        player.body.allowGravity = true;
        propel.reset(3200,550);
        helicopter.stop();
    },
    
    elevator:function(player,elevator){
        elevator.body.allowGravity= true;
        
        fall.play();
    },
    
    
    
    flame:function(player,flame){
        player.reset(100,560);
        life = life -1;
        lifeText.text = life;
        lose.play();
    },
    
    killP:function(){
        life = life - 1;
         lifeText.text = life;
        
    },
    
    killCoin12:function(player,coinNumber12){
       
        if(x==2 || x==3){
            coinNumber12.reset(coinNumber12.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
        }
        else{
            //life = life - 1;
           // lifeText.text = life;
            audioStomp.play();
            coinNumber12.kill();
            lathos +=1;
            player.reset(100,560);
            lathos5.visible = true;
            l5=1;
        }
    },
    
     killCoin6:function(player,coinNumber6){
       
        if(x==2 || x==3){
            coinNumber6.reset(coinNumber6.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
        }
        else{
            //life = life - 1;
           // lifeText.text = life;
            audioStomp.play();
            coinNumber6.kill();
            lathos +=1;
            player.reset(100,560);
            lathos5.visible = true;
            l5=1;
        }
    },
    
     killheart2:function(player,heart2){
       
       life = life + 1;
       lifeText.text = life;
       hitenemy.play();
       heart2.kill();
        
    },
    
     luckybox:function(player,luckybox){
       coinNumber92.visible = true;
         hit.play();
         },
    
    luckybox2:function(player,luckybox2){
       coinNumber252.visible = true;
         hit.play();
         },
    
     killCoin50:function(player,coinNumber50){
       
        if(x==2 || x==5){
            coinNumber50.reset(coinNumber50.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
           // life = life - 1;
           // lifeText.text = life;
            audioStomp.play();
            coinNumber50.kill();
            lathos +=1;
            player.reset(100,560);
            lathos3.visible = true;
            l3=1;
        }
    },
    
     killCoin30:function(player,coinNumber30){
       
        if(x==2 || x==3 || x==5){
            coinNumber30.reset(coinNumber30.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber30.kill();
            lathos +=1;
        }
    },
    
     killCoin21:function(player,coinNumber21){
       
        if(x==3){
            coinNumber21.reset(coinNumber21.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber21.kill();
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
    },
    
    killCoin272:function(player,coinNumber272){
       
        if(x==3){
            coinNumber272.reset(coinNumber272.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber272.kill();
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
    },
    
     killCoin35:function(player,coinNumber35){
       
        if(x==5){
            coinNumber35.reset(coinNumber35.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
        }
        else{
          //  life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber35.kill();
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin40:function(player,coinNumber40){
       
        if(x==2 || x==5){
            coinNumber40.reset(coinNumber40.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber40.kill();
            lathos +=1;
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
           
        }
    },
    
     killCoin45:function(player,coinNumber45){
       
        if(x==3 || x==5){
            coinNumber45.reset(coinNumber45.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==3){
                sum3 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber45.kill();
            lathos +=1;
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
        }
    },
    
     
    
    killCoin20:function(player,coinNumber20){
       
        if(x==2 || x==5){
            coinNumber20.reset(coinNumber20.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber20.kill();
            lathos +=1;
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
        }
    },
    
    killCoin9:function(player,coinNumber9){
        
        if(x==3){
            coinNumber9.reset(coinNumber9.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber9.kill();
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
    },
    
    killCoin92:function(player,coinNumber92){
        
        if(x==3){
        coinNumber92.reset(coinNumber92.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber92.kill();
          coinNumber92.reset(coinNumber92.x,1000);
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
    },
    
     killCoin252:function(player,coinNumber252){
        
        if(x==5){
        coinNumber252.reset(coinNumber252.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber252.kill();
            coinNumber252.reset(coinNumber252.x,1000);
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin27:function(player,coinNumber27){
        
        if(x==3){
            coinNumber27.reset(coinNumber27.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber27.kill();
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
      },       
     
    
    getCoin4:function(){
       
        if(x==1){
         score += 100;
            scoreText.text = 'Score: ' + score;
         this.sound.play('coin');
        }
        else{
            life = life - 1;
            lifeText.text = life;
            this.sound.play('stomp');
        }
    },
    
    killCoin10:function(player,coinNumber10){
        
        if(x==2 || x==5){
            coinNumber10.reset(coinNumber10.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber10.kill();
            lathos +=1;
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
        }
    },
    
     killCoin102:function(player,coinNumber102){
        
        if(x==2 || x==5){
            coinNumber102.reset(coinNumber102.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber102.kill();
            lathos +=1;
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
        }
    },
    
    killCoin15:function(player,coinNumber15){
       
        if(x==3 || x==5){
            coinNumber15.reset(coinNumber15.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==3){
                sum3 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
        }
        else{
         //   life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber15.kill();
            lathos +=1;
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
        }
    },
    
    getCoin7:function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        if(x==3 || x==9){
         score += 100;
            scoreText.text = 'Score: ' + score;
         this.sound.play('coin');
        }
        else{
            life = life - 1;
            lifeText.text = life;
            this.sound.play('stomp');
        }
    },
    
    killCoin4:function(player,coinNumber4){
        
        if(x==2){
            coinNumber4.reset(coinNumber4.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
        }
        else{
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber4.kill();
            lathos +=1;
            if(x==3){
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
    },
    
     killCoin14:function(player,coinNumber14){
        
        if(x==2){
            coinNumber14.reset(coinNumber14.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
        }
        else{
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber14.kill();
            lathos +=1;
            if(x==3){
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
    },
    
     killCoin352:function(player,coinNumber352){
        
        if(x==5){
            coinNumber352.reset(coinNumber352.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
        }
        else{
       //     life = life - 1;
       //     lifeText.text = life;
            audioStomp.play();
            coinNumber352.kill();
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
     killCoin452:function(player,coinNumber452){
        
        if(x==5 || x==3){
            coinNumber452.reset(coinNumber452.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==5){
            sum5 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
        }
        else{
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber452.kill();
            lathos +=1;
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
        }
    },
    
     killCoin8:function(player,coinNumber8){
        
        if(x==2){
            coinNumber8.reset(coinNumber8.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
        }
        else{
       //     life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber8.kill();
            lathos +=1;
            if(x==3){
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
            }
        }
    },
    
    getCoin9:function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        if(x==2 || x==3 || x==6){
         score += 100;
            scoreText.text = 'Score: ' + score;
         this.sound.play('coin');
        }
        else{
            life = life - 1;
            lifeText.text = life;
            this.sound.play('stomp');
        }
    },
    
    getCoin10:function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        if(x==2 || x==3 || x==6 || x==4){
         score += 100;
            scoreText.text = 'Score: ' + score;
         this.sound.play('coin');
        }
        else{
            life = life - 1;
            lifeText.text = life;
            this.sound.play('stomp');
        }
    },
    
    getCoin11:function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        if(x==2 || x==4){
         score += 100;
            scoreText.text = 'Score: ' + score;
         this.sound.play('coin');
        }
        else{
            life = life - 1;
            lifeText.text = life;
            this.sound.play('stomp');
        }
    },
    
    getCoin12:function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        if(x==2 || x==3 || x==6){
         score += 100;
            scoreText.text = 'Score: ' + score;
         this.sound.play('coin');
        }
        else{
            life = life - 1;
            lifeText.text = life;
            this.sound.play('stomp');
        }
    },
    
    killCoin24:function(player,coinNumber24){
        if(x==2 || x==3){
            coinNumber24.reset(coinNumber24.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber24.kill();
            lathos +=1;
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
        }
    },
    
     killCoin18:function(player,coinNumber18){
        if(x==2 || x==3){
            coinNumber18.reset(coinNumber18.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber18.kill();
            lathos +=1;
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
        }
    },
    
    killCoin25:function(player,coinNumber25){
       
        if(x==5){
            coinNumber25.reset(coinNumber25.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber25.kill();
            lathos +=1;
            if(x==2){
                player.reset(100,560);
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
                player.reset(100,560);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
    killCoin:function(player,coinNumber36){
        if(x==2 || x==3){
            coinNumber36.reset(coinNumber36.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
        }
        else{
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber36.kill();
            lathos +=1;
                player.reset(100,560);
            lathos5.visible = true;
            l5=1;
        }
    },
    
   
    
    speedPowerup:function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        playerSpeed +=50;
       
        
        this.time.events.add(Phaser.Timer.SECOND * 2, function(){
            playerSpeed -=50;
        });
    },
    
    //showCoin25:function(){
       // this.coinNumber1 = this.game.add.sprite(120, 80, 'coin25');
    //},
   hitcoin:function(player,tile){
    tile.aplpha=0.2;
     
    layer.dirty = true;
      
    return false;
},
    
    shootBullet:function(){
      if(this.time.now > shootTime){
        bullet = bullets.getFirstExists(false);
            if(bullet){
                bullet.reset(player.x,player.y);
                bullet.body.velocity.y = -600;
                
                shootTime = this.time.now + 900;
             }
    
      }
    }
    
    
}

function checkOverlap(spriteA,spriteB){
    
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    
   return Phaser.Rectangle.intersects(boundsA,boundsB); 
}







