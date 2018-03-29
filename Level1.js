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
var key;
var sum2=0;
var sum3=0;
var sum5=0;
var music;
var victory;
var lose;
var backround;
var telos;
var flag;
var luckybox;
var audioCoin;
var audioStomp;



Game.Level1.prototype = {
    
    create:function(game){
       this.stage.backgroundColor = '#3A5963';
        
        backround = this.add.tileSprite(0,0,4000,800,'backround');
        
        this.physics.arcade.gravity.y = 1400;
        
        map = this.add.tilemap('map');
        map.addTilesetImage('GoldBricks','tileset');
        layer = map.createLayer('Tile Layer 1');
        layer.resizeWorld();
        
        map.setCollisionBetween(28,29);
        map.setCollisionBetween(59,60);
        
        
        map.setTileIndexCallback(3,this.resetPlayer,this);
        
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
        
        
        
        //coins = game.add.group();
        //map.createFromObjects('Object Layer 1',1,'coin',0,true,false,coins);
        
        player = this.add.sprite(100,500,'player');
        player.anchor.setTo(0.5,0.5);
        player.animations.add('idle',[0,1],1,true);
        player.animations.add('jump',[2],1,true);
        player.animations.add('run', [3,4,5,6,7,8],7,true);
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
        
        
        scoreText = game.add.text(15,200,'Score:0',{fontSize: '32px',fill : '#000'});
        xText = game.add.text(15,100,'x=',{fontSize: '32px',fill : '#000'});
        lifeText = game.add.text(50,300,'l=',{fontSize: '32px',fill : '#000'});
        
        
        
        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            left: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            up: this.input.keyboard.addKey(Phaser.Keyboard.UP),
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.w),
        };
        
        
        enemy1 = new EnemyBird(0,game,player.x+50,player.y +120);
        enemy2 = new EnemyBird(0,game,player.x+830,player.y +120);
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
        
        
        coinNumber36 = this.game.add.sprite(380,550,'coin36');
        coinNumber36.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber36);
        coinNumber36.body.allowGravity = false;
        
        coinNumber50 = this.game.add.sprite(580,550,'coin50');
        coinNumber50.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber50);
        coinNumber50.body.allowGravity = false;
        
        coinNumber10 = this.game.add.sprite(310,380,'coin10');
        coinNumber10.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber10);
        coinNumber10.body.allowGravity = false;
        
         coinNumber9 = this.game.add.sprite(780,550,'coin9');
        coinNumber9.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber9);
        coinNumber9.body.allowGravity = false;
        
         coinNumber4 = this.game.add.sprite(980,550,'coin4');
        coinNumber4.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber4);
        coinNumber4.body.allowGravity = false;
        
        coinNumber362 = this.game.add.sprite(1180,550,'coin36');
        coinNumber362.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber362);
        coinNumber362.body.allowGravity = false;
        
         coinNumber42 = this.game.add.sprite(2950,550,'coin4');
        coinNumber42.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber42);
        coinNumber42.body.allowGravity = false;
        
        coinNumber25 = this.game.add.sprite(1480,550,'coin25');
        coinNumber25.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber25);
        coinNumber25.body.allowGravity = false;
        
        coinNumber102 = this.game.add.sprite(1300,380,'coin10');
        coinNumber102.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber102);
        coinNumber102.body.allowGravity = false;
        
        coinNumber15 = this.game.add.sprite(1470,380,'coin15');
        coinNumber15.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber15);
        coinNumber15.body.allowGravity = false;
        
         coinNumber27 = this.game.add.sprite(1600,380,'coin27');
        coinNumber27.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber27);
        coinNumber27.body.allowGravity = false;
        
         coinNumber8 = this.game.add.sprite(1750,380,'coin8');
        coinNumber8.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber8);
        coinNumber8.body.allowGravity = false;
        
        coinNumber12 = this.game.add.sprite(1950,550,'coin12');
        coinNumber12.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber12);
        coinNumber12.body.allowGravity = false;
        
        coinNumber24 = this.game.add.sprite(3350,550,'coin24');
        coinNumber24.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber24);
        coinNumber24.body.allowGravity = false;
        
        coinNumber16 = this.game.add.sprite(2350,550,'coin16');
        coinNumber16.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber16);
        coinNumber16.body.allowGravity = false;
        
        
         coinNumber18 = this.game.add.sprite(2550,550,'coin18');
        coinNumber18.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber18);
        coinNumber18.body.allowGravity = false;
        
         coinNumber20 = this.game.add.sprite(1680,550,'coin20');
        coinNumber20.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber20);
        coinNumber20.body.allowGravity = false;
        
        coinNumber30 = this.game.add.sprite(2750,550,'coin30');
        coinNumber30.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber30);
        coinNumber30.body.allowGravity = false;
        
        coinNumber35 = this.game.add.sprite(3550,550,'coin35');
        coinNumber35.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber35);
        coinNumber35.body.allowGravity = false;
        
        coinNumber40 = this.game.add.sprite(3150,550,'coin40');
        coinNumber40.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber40);
        coinNumber40.body.allowGravity = false;
        
        coinNumber45 = this.game.add.sprite(2150,550,'coin45');
        coinNumber45.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber45);
        coinNumber45.body.allowGravity = false;
        
        
        
       // coinNumber252 = this.game.add.sprite(2750,550,'coin25');
        //this.physics.arcade.enable(coinNumber252);
        //coinNumber252.body.allowGravity = false;
        
         luckybox = this.game.add.sprite(2050,450,'luckybox');
        this.physics.arcade.enable(luckybox);
        luckybox.body.allowGravity = false;
        luckybox.body.immovable = true;
       
        
         coinNumber92 = this.game.add.sprite(2050,300,'coin9');
        coinNumber92.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber92);
        coinNumber92.body.allowGravity = false;
        coinNumber92.visible = false;
        
        key = this.game.add.sprite(3680,530,'key');
        key.anchor.setTo(0.5,0.5);
        key.scale.setTo(0.1);
        this.physics.arcade.enable(key);
        key.body.allowGravity = false;
        key.visible = false;
        
        
        
        
         flag = this.game.add.sprite(3680,530,'flag');
        flag.scale.setTo(0.5);
        this.physics.arcade.enable(flag);
        flag.body.allowGravity = false;
        
        
        
    },
        
    update:function(){
        
        this.physics.arcade.collide(player,layer);
        this.physics.arcade.collide(player,enemy1.bird,this.resetPlayer);
        this.physics.arcade.collide(player,enemy2.bird,this.resetPlayer);
         this.physics.arcade.collide(player,enemy3.bird,this.resetPlayer);
         this.physics.arcade.collide(player,enemy4.bird,this.resetPlayer);
        
        player.body.velocity.x = 0;
        
        coinNumber36.angle +=1;
        coinNumber50.angle +=1;
        coinNumber10.angle +=1;
        coinNumber9.angle +=1;
        coinNumber4.angle +=1;
        
        this.physics.arcade.collide(player,coinNumber36,this.killCoin);
        this.physics.arcade.collide(player,coinNumber50,this.killCoin50);
        this.physics.arcade.collide(player,coinNumber10,this.killCoin10);
        this.physics.arcade.collide(player,coinNumber9,this.killCoin9);
        this.physics.arcade.collide(player,coinNumber4,this.killCoin4);
        this.physics.arcade.collide(player,coinNumber362,this.killCoin);
        this.physics.arcade.collide(player,coinNumber42,this.killCoin42);
        this.physics.arcade.collide(player,coinNumber25,this.killCoin25);
        this.physics.arcade.collide(player,coinNumber102,this.killCoin102);
        this.physics.arcade.collide(player,coinNumber15,this.killCoin15);
        this.physics.arcade.collide(player,coinNumber27,this.killCoin27);
        this.physics.arcade.collide(player,coinNumber8,this.killCoin8);
        this.physics.arcade.collide(player,coinNumber12,this.killCoin12);
        this.physics.arcade.collide(player,coinNumber24,this.killCoin24);
        this.physics.arcade.collide(player,coinNumber16,this.killCoin16);
        this.physics.arcade.collide(player,coinNumber18,this.killCoin18);
        this.physics.arcade.collide(player,coinNumber252,this.killCoin252);
        this.physics.arcade.collide(player,heart2,this.killheart2);
        this.physics.arcade.collide(player,luckybox,this.luckybox);
        this.physics.arcade.collide(player,coinNumber92,this.killCoin92);
        this.physics.arcade.collide(player,coinNumber20,this.killCoin20);
        this.physics.arcade.collide(player,coinNumber30,this.killCoin30);
        this.physics.arcade.collide(player,coinNumber35,this.killCoin35);
        this.physics.arcade.collide(player,coinNumber40,this.killCoin40);
        this.physics.arcade.collide(player,coinNumber45,this.killCoin45);
        
        this.physics.arcade.collide(player,flag,this.killFlag);
         this.physics.arcade.collide(player,key,this.killFlag);
        
        
        if(sum2>=10 || sum3>=7 || sum5>=7){
            key.visible = true;
            key.angle +=2;
            flag.visible = false;
        }
        
        if(telos==1){
            music.stop();
            if(sum2>=10 || sum3>=7 || sum5>=7){
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
            sum2=0;
            sum3=0;
            sum5=0;
        }
        
        if(life==0){
            music.stop();
            lose.play();
            this.state.start('loss');
            life=3;
            score=0;
            sum2=0;
            sum3=0;
            sum5=0;
        }
         
        
        
        
        if(controls.right.isDown){
            player.animations.play('run');
            player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed;
        }
        
         if(controls.left.isDown){
            player.animations.play('run');
            player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;
        }
        
        if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer){
            player.body.velocity.y = -800;
            jumpTimer = this.time.now + 750;
            player.animations.play('jump');
            this.sound.play('jump');
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
            enemy1.kill();
         
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
    
    killP:function(){
        life = life - 1;
         lifeText.text = life;
        
    },
    
    killCoin12:function(player,coinNumber12){
       
        if(x==2 || x==3){
           coinNumber12.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber12.reset(1950,40);
        }
    },
    
     killheart2:function(player,heart2){
       
       life = life + 1;
       lifeText.text = life;
       heart2.kill();
        
    },
    
     luckybox:function(player,luckybox){
       coinNumber92.visible = true;
         luckybox.reset(2050,450);
         },
    
     killCoin50:function(player,coinNumber50){
       
        if(x==2 || x==5){
         coinNumber50.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber50.reset(580,40);
        }
    },
    
     killCoin30:function(player,coinNumber30){
       
        if(x==2 || x==3 || x==5){
         coinNumber30.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber30.reset(2750,40);
        }
    },
    
     killCoin35:function(player,coinNumber35){
       
        if(x==5){
         coinNumber35.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber35.reset(3550,40);
        }
    },
    
     killCoin40:function(player,coinNumber40){
       
        if(x==2 || x==5){
         coinNumber40.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber40.reset(3150,40);
        }
    },
    
     killCoin45:function(player,coinNumber45){
       
        if(x==3 || x==5){
         coinNumber45.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber45.reset(2150,40);
        }
    },
    
     killCoin252:function(player,coinNumber252){
       
        if(x==1){
         coinNumber252.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber252.reset(2750,40);
        }
    },
    
    killCoin20:function(player,coinNumber20){
       
        if(x==2 || x==5){
         coinNumber20.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber20.reset(1680,40);
        }
    },
    
    killCoin9:function(player,coinNumber9){
        
        if(x==3){
          coinNumber9.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber9.reset(780,40);
        }
    },
    
    killCoin92:function(player,coinNumber92){
        
        if(x==3){
          coinNumber92.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber92.reset(2050,40);
        }
    },
    
     killCoin27:function(player,coinNumber27){
        
        if(x==3){
          coinNumber27.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber27.reset(1600,40);
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
         coinNumber10.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber10.reset(680,40);
        }
    },
    
     killCoin102:function(player,coinNumber102){
        
        if(x==2 || x==5){
         coinNumber102.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber102.reset(1300,40);
        }
    },
    
    killCoin15:function(player,coinNumber15){
       
        if(x==3 || x==5){
         coinNumber15.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber15.reset(1470,40);
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
          coinNumber4.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber4.reset(980,40);
        }
    },
    
     killCoin16:function(player,coinNumber16){
        
        if(x==2){
          coinNumber16.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber16.reset(2350,40);
        }
    },
     killCoin42:function(player,coinNumber42){
        
        if(x==2){
          coinNumber42.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber42.reset(2950,40);
        }
    },
    
     killCoin8:function(player,coinNumber8){
        
        if(x==2){
          coinNumber8.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber8.reset(1750,40);
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
        coinNumber24.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber24.reset(3350,40);
        }
    },
    
     killCoin18:function(player,coinNumber18){
        if(x==2 || x==3){
        coinNumber18.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber18.reset(2550,40);
        }
    },
    
    killCoin25:function(player,coinNumber25){
       
        if(x==5){
         coinNumber25.kill();
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
        }
        else{
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber25.reset(1480,40);
        }
    },
    
    killCoin:function(player,coinNumber36){
        if(x==2 || x==3){
        coinNumber36.kill();
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
            life = life - 1;
            lifeText.text = life;
            audioStomp.play();
            coinNumber36.reset(380,40);
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







