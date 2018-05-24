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
var coinNumber22;
var coinNumber28;
var coinNumber33;
var coinNumber39;
var coinNumber48;
var coinNumber51;
var coinNumber55;
var coinNumber56;
var coinNumber58;
var coinNumber60;
var coinNumber62;
var coinNumber63;
var coinNumber64;
var coinNumber65;
var coinNumber69;
var coinNumber70;
var coinNumber75;
var coinNumber76;
var coinNumber80;
var coinNumber81;
var coinNumber84;
var coinNumber85;
var coinNumber87;
var coinNumber90;
var coinNumber93;
var coinNumber95;
var coinNumber98;
var coinNumber99;
var coinNumber100;
var coinNumber110;
var coinNumber120;
var coinNumber130;
var coinNumber140;
var coinNumber150;
var coinNumber160;
var coinNumber170;
var coinNumber180;
var coinNumber190;
var coinNumber200;
var coinNumber300;
var div2;
var div3;
var div5;
var div10;
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
var sum10 = 0;
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
var lathos10;
var kappa = 0;
var water;
var backround2;
var l5 = 0;
var l2 = 0;
var l3 = 0;
var l10 = 0;
var thesix;
var thesiy;
var thesi2x;
var thesi2y;
var thesi3x;
var thesi3y;
var thesi5x;
var thesi5y;
var thesi10x;
var thesi10y;
var weapon;
var c;
var s2 = 1;
var s3 = 2;
var s5 = 2;
var s10 = 1;
var hint;
var hint2;
var hint3;
var hint5;
var hint10;
var teleport;
var teleport2;
var facing = 'right';
var bullet2;
var heart3;
var apotelesmata = []
var heartbonus;
var hs = 0;
var ok=0;
var wk=0;
var wk2=0;
var wk3=0;
var wk5=0;
var wk10=0;

Game.Level1.prototype = {
    
    create:function(game){
       this.stage.backgroundColor = '#3A5963';
        
        backround = this.add.tileSprite(0,0,4000,800,'backround');
        backround2 = this.add.tileSprite(3800,0,4000,800,'backround3');
        div2 = this.add.sprite(500,100,'div2');
        div3 = this.add.sprite(500,100,'div3');
        div5 = this.add.sprite(500,100,'div5');
        div10 = this.add.sprite(500,100,'div10');
        div2.visible = false;
        div3.visible = false;
        div5.visible = false;
        div10.visible = false;
        
        hint2 = this.add.sprite(3150,250,'hint2');
        hint2.scale.setTo(0.6);
        hint3 = this.add.sprite(3150,250,'hint3');
        hint3.scale.setTo(0.6);
        hint5 = this.add.sprite(3150,250,'hint5');
        hint5.scale.setTo(0.6);
        hint10 = this.add.sprite(3150,250,'hint10');
        hint10.scale.setTo(0.6);
        hint2.visible = false;
        hint3.visible = false;
        hint5.visible = false;
        hint10.visible = false;
        
         


        
        this.physics.arcade.gravity.y = 1400;
        
        map = this.add.tilemap('map');
        map.addTilesetImage('GoldBricks','tileset');
        layer = map.createLayer('Tile Layer 1');
        layer.resizeWorld();
        
        map.setCollisionBetween(28,29);
        map.setCollisionBetween(59,60);
        map.setCollisionBetween(19,20);
        map.setCollisionBetween(50,51);
        map.setCollisionBetween(43,44);
        map.setTileIndexCallback(3,this.resetPlayer,this);
        map.setTileIndexCallback(9,this.resetPlayer2,this);
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
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            down:this.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        };
        
        
        enemy1 = new EnemyBird(0,game,player.x+50,player.y +120);
        enemy2 = new EnemyBird(0,game,player.x+1030,player.y +120);
        enemy3 = new EnemyBird(0,game,player.x+1750,player.y +120);
        enemy4 = new EnemyBird(0,game,player.x+2150,player.y +120);
        
        //bullets = game.add.group();
        
        //bullets.enableBody = true;
        //bullets.physicsBodyType = Phaser.Physics.ARCADE;
        //bullets.createMultiple(5,'bullet');
        //bullets.setAll('anchor.x',0.5);
        //bullets.setAll('anchor.y',0.5);
        //bullets.setAll('outOfBoundsKill',true);
        //bullets.setAll('checkWorldBounds',true);
        
        tixi = Math.floor(Math.random() * 2 + 1);
        
       // r = Math.floor(Math.random() * 4) + 1;
        //if(r==1){
            //x=2;
        //}
        //if(r==2){
        //    x=3;
        //}
        //if(r==3){
        //    x=5;
        //}
        //if(r==4){
        //    x=10;
        //}
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
        
         if(x==10){
            div10.visible = true;
            this.time.events.add(Phaser.Timer.SECOND * 6, function(){
            div10.visible = false;
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
        
         heart3 = this.add.sprite(4100,400,'heart');
        heart3.scale.setTo(0.5);
        this.physics.arcade.enable(heart3);
        heart3.body.allowGravity = false;
        
        thesi2x = [580,7400,1680,2750,7400,4920,5030,5500,5680,6750,7400,7400,7400,7400,7400,7400]
        thesi2y = [610,900,610,610,900,610,100,580,350,350,900,900,900,900,900,900]
        
        thesi3x = [380,1280,4320,2150,2790,3800,5280,5520,6350,7300,7400,7400,7400,7400,7400,7400]
        thesi3y = [610,610,330,610,290,410,330,350,200,610,900,900,900,900,900,900]
        
        thesi5x = [7400,1300,1600,2350,3450,7400,5100,5560,6100,6350,7400]
        thesi5y = [900,420,420,610,100,900,610,160,200,610,900]
        
        thesi10x = [800,1750,1950,2450,3600,3650,4620,5360,7040,6900,7400,7400,7400,7400,7400,1470,3870,7150,330,1480,7400]
        thesi10y = [480,420,610,230,410,100,280,160,610,350,900,900,900,900,900,420,100,350,420,610,900]
       // thesix = [
           // 310,380,580,800,1180,1300,1470,1480,1600,1680,1750,1950,2150,2350,2450,2750,2790,3450,3600,3650,3800,3870,4320,4620,4900,4990,5000,5250,5320,5480,5500,6100,5520,5680,5840,6200,6350,6650,6840,7300
        //]
        //thesiy = [
           // 380,550,550,480,550,380,380,550,380,550,380,550,550,550,230,550,290,100,410,100,410,100,330,280,410,100,580,380,130,130,580,250,390,390,390,580,250,400,400,580
        //]
            this.shuffle(thesi2x,thesi2y);
            this.shuffle(thesi3x,thesi3y);
            this.shuffle(thesi5x,thesi5y);
            this.shuffle(thesi10x,thesi10y);

        //if(tixi==1){
       
            h= Math.floor(Math.random() * 25);
        
        coinNumber110 = this.game.add.sprite(thesi10x[11],thesi10y[11],'coin110');
        if(thesi10y[11]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
        coinNumber120 = this.game.add.sprite(thesi10x[12],thesi10y[12],'coin120');
        if(thesi10y[12]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
            s3 +=1;
        }
        coinNumber130 = this.game.add.sprite(thesi10x[13],thesi10y[13],'coin130');
        if(thesi10y[13]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
        coinNumber140 = this.game.add.sprite(thesi10x[14],thesi10y[14],'coin140');
        if(thesi10y[14]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
        coinNumber150 = this.game.add.sprite(thesi10x[15],thesi10y[15],'coin150');
        if(thesi10y[15]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
            s3 +=1;
        }
        coinNumber160 = this.game.add.sprite(thesi10x[16],thesi10y[16],'coin160');
        if(thesi10y[16]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
        coinNumber170 = this.game.add.sprite(thesi10x[17],thesi10y[17],'coin170');
        if(thesi10y[17]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
        coinNumber180 = this.game.add.sprite(thesi10x[18],thesi10y[18],'coin180');
        if(thesi10y[18]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
            s3 +=1;
        }
        coinNumber190 = this.game.add.sprite(thesi10x[19],thesi10y[19],'coin190');
        if(thesi10y[19]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
        coinNumber200 = this.game.add.sprite(thesi10x[20],thesi10y[20],'coin200');
        if(thesi10y[20]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber36 = this.game.add.sprite(thesi2x[0],thesi2y[0],'coin36');
        if(thesi2y[0]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber50 = this.game.add.sprite(thesi10x[2],thesi10y[2],'coin50');
        if(thesi10y[2]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber10 = this.game.add.sprite(thesi10x[1],thesi10y[1],'coin10');
        if(thesi10y[1]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber9 = this.game.add.sprite(thesi3x[0],thesi3y[0],'coin9');
        if(thesi3y[0]!=900){
            s3 +=1;
        }
            coinNumber4 = this.game.add.sprite(thesi2x[1],thesi2y[1],'coin4');
        if(thesi2y[1]!=900){
            s2 +=1;
        }
            coinNumber362 = this.game.add.sprite(thesi3x[1],thesi3y[1],'coin36');
        if(thesi3y[1]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber452 = this.game.add.sprite(thesi5x[0],thesi5y[0],'coin45');
        if(thesi5y[0]!=900){
            s5 +=1;
            s3 +=1;
        }
            coinNumber25 = this.game.add.sprite(thesi5x[1],thesi5y[1],'coin25');
        if(thesi5y[1]!=900){
            s5 +=1;
        }
            coinNumber102 = this.game.add.sprite(thesi10x[0],thesi10y[0],'coin10');
        if(thesi10y[0]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber15 = this.game.add.sprite(thesi5x[2],thesi5y[2],'coin15');
        if(thesi5y[2]!=900){
            s5 +=1;
            s3 +=1;
        }
            coinNumber27 = this.game.add.sprite(thesi3x[2],thesi3y[2],'coin27');
        if(thesi3y[2]!=900){
            s3 +=1;
        }
            coinNumber8 = this.game.add.sprite(thesi2x[2],thesi2y[2],'coin8');
        if(thesi2y[2]!=900){
            s2 +=1;
        }
            coinNumber12 = this.game.add.sprite(thesi3x[3],thesi3y[3],'coin12');
        if(thesi3y[3]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber24 = this.game.add.sprite(thesi3x[4],thesi3y[4],'coin24');
        if(thesi3y[4]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber352 = this.game.add.sprite(thesi5x[3],thesi5y[3],'coin35');
        if(thesi5y[3]!=900){
            s5 +=1;
            s3 +=1;
        }
            coinNumber18 = this.game.add.sprite(thesi2x[15],thesi2y[15],'coin18');
        if(thesi2y[15]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber20 = this.game.add.sprite(thesi10x[3],thesi10y[3],'coin20');
        if(thesi10y[3]!=900){
            s2 +=1;
            s10 +=1;
            s5 +=1;
        }
            coinNumber30 = this.game.add.sprite(thesi10x[4],thesi10y[4],'coin30');
        if(thesi10y[4]!=900){
            s2 +=1;
            s3 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber35 = this.game.add.sprite(thesi5x[4],thesi5y[4],'coin35');
        if(thesi5y[4]!=900){
            s5 +=1;
        }
            coinNumber40 = this.game.add.sprite(thesi10x[5],thesi10y[5],'coin40');
        if(thesi10y[5]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber45 = this.game.add.sprite(thesi5x[5],thesi5y[5],'coin45');
        if(thesi5y[5]!=900){
            s5 +=1;
            s3 +=1;
        }
            coinNumber92 = this.game.add.sprite(2050,300,'coin9');
        
            coinNumber21 = this.game.add.sprite(thesi3x[6],thesi3y[6],'coin21');
        if(thesi3y[6]!=900){
            s3 +=1;
        }
            coinNumber272 = this.game.add.sprite(thesi3x[7],thesi3y[7],'coin27'); 
        if(thesi3y[7]!=900){
            s3 +=1;
        }
            coinNumber6 = this.game.add.sprite(thesi2x[14],thesi2y[14],'coin6');
        if(thesi2y[14]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber14 = this.game.add.sprite(thesi2x[3],thesi2y[3],'coin14');
        if(thesi2y[3]!=900){
            s2 +=1;
        }
            coinNumber252 = this.game.add.sprite(4000,300,'coin25');
        
        
            coinNumber60 = this.game.add.sprite(thesi10x[6],thesi10y[6],'coin60');
        if(thesi10y[6]!=900){
            s2 +=1;
            s3 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber70 = this.game.add.sprite(thesi10x[7],thesi10y[7],'coin70');
        if(thesi10y[7]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber80 = this.game.add.sprite(thesi10x[8],thesi10y[8],'coin80');
        if(thesi10y[8]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber90 = this.game.add.sprite(thesi10x[9],thesi10y[9],'coin90');
        if(thesi10y[9]!=900){
            s2 +=1;
            s3 +=1;
            s5 +=1;
            s10 +=1;
        }
            coinNumber100 = this.game.add.sprite(thesi10x[10],thesi10y[10],'coin100');
        if(thesi10y[10]!=900){
            s2 +=1;
            s5 +=1;
            s10 +=1;
        }
          
            coinNumber22 = this.game.add.sprite(thesi2x[4],thesi2y[4],'coin22');
        if(thesi2y[4]!=900){
            s2 +=1;
        }
            coinNumber33 = this.game.add.sprite(thesi3x[9],thesi3y[9],'coin33');
        if(thesi3y[9]!=900){
            s3 +=1;
        }
            coinNumber28 = this.game.add.sprite(thesi2x[13],thesi2y[13],'coin28');
        if(thesi2y[13]!=900){
            s3 +=1;
            s2 +=1;
        }
            coinNumber39 = this.game.add.sprite(thesi3x[11],thesi3y[11],'coin39');
        if(thesi3y[11]!=900){
            s3 +=1;
        }
            coinNumber48 = this.game.add.sprite(thesi2x[12],thesi2y[12],'coin48');
        if(thesi2y[12]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber51 = this.game.add.sprite(thesi3x[13],thesi3y[13],'coin51');
        if(thesi3y[13]!=900){
            s3 +=1;
        }
            coinNumber55 = this.game.add.sprite(thesi5x[6],thesi5y[6],'coin55');
        if(thesi5y[6]!=900){
            s5 +=1;
        }
            coinNumber56 = this.game.add.sprite(thesi2x[5],thesi2y[5],'coin56');
        if(thesi2y[5]!=900){
            s2 +=1;
        }
            coinNumber58 = this.game.add.sprite(thesi2x[6],thesi2y[6],'coin58');
        if(thesi2y[6]!=900){
            s2 +=1;
        }
            coinNumber62 = this.game.add.sprite(thesi2x[7],thesi2y[7],'coin62');
        if(thesi2y[7]!=900){
            s2 +=1;
        }
            coinNumber63 = this.game.add.sprite(thesi3x[14],thesi3y[14],'coin63');
        if(thesi3y[14]!=900){
            s3 +=1;
        }
            coinNumber64 = this.game.add.sprite(thesi2x[8],thesi2y[8],'coin64');
        if(thesi2y[8]!=900){
            s2 +=1;
        }
            coinNumber65 = this.game.add.sprite(thesi5x[7],thesi5y[7],'coin65');
        if(thesi5y[7]!=900){
            s5 +=1;
        }
            coinNumber69 = this.game.add.sprite(thesi3x[15],thesi3y[15],'coin69');
        if(thesi3y[15]!=900){
            s3 +=1;
        }
            coinNumber75 = this.game.add.sprite(thesi5x[8],thesi5y[8],'coin75');
        if(thesi5y[8]!=900){
            s5 +=1;
            s3 +=1;
        }
            coinNumber76 = this.game.add.sprite(thesi2x[9],thesi2y[9],'coin76');
        if(thesi2y[9]!=900){
            s2 +=1; 
        }
            coinNumber81 = this.game.add.sprite(thesi3x[12],thesi3y[12],'coin81');
        if(thesi3y[12]!=900){
            s3 +=1;
        }
            coinNumber84 = this.game.add.sprite(thesi2x[11],thesi2y[11],'coin84');
        if(thesi2y[11]!=900){
            s2 +=1;
            s3 +=1;
        }
            coinNumber85 = this.game.add.sprite(thesi5x[9],thesi5y[9],'coin85');
        if(thesi5y[9]!=900){
            s5 +=1;
        }
            coinNumber87 = this.game.add.sprite(thesi3x[10],thesi3y[10],'coin87');
        if(thesi3y[10]!=900){
            s3 +=1;
        }
            coinNumber93 = this.game.add.sprite(thesi3x[8],thesi3y[8],'coin93');
        if(thesi3y[8]!=900){
            s3 +=1;
        }
            coinNumber95 = this.game.add.sprite(thesi5x[10],thesi5y[10],'coin95');
        if(thesi5y[10]!=900){
            s5 +=1;
        }
            coinNumber98 = this.game.add.sprite(thesi2x[10],thesi2y[10],'coin98');
        if(thesi2y[10]!=900){
            s2 +=1;
        }
            coinNumber99 = this.game.add.sprite(thesi3x[5],thesi3y[5],'coin99');
        if(thesi3y[5]!=900){
            s3 +=1;
        }
        
         coinNumber110.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber110);
        coinNumber110.body.allowGravity = false;
        
         coinNumber120.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber120);
        coinNumber120.body.allowGravity = false;
        
         coinNumber130.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber130);
        coinNumber130.body.allowGravity = false;
        
         coinNumber140.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber140);
        coinNumber140.body.allowGravity = false;
        
         coinNumber150.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber150);
        coinNumber150.body.allowGravity = false;
        
         coinNumber160.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber160);
        coinNumber160.body.allowGravity = false;
        
         coinNumber170.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber170);
        coinNumber170.body.allowGravity = false;
        
         coinNumber180.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber180);
        coinNumber180.body.allowGravity = false;
        
         coinNumber190.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber190);
        coinNumber190.body.allowGravity = false;
        
         coinNumber200.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber200);
        coinNumber200.body.allowGravity = false;
        
         coinNumber300 = this.game.add.sprite(7410,480,'coin300');
        coinNumber300.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber300);
        coinNumber300.body.allowGravity = false;
        coinNumber300.visible = false;

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
        
        coinNumber22.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber22);
        coinNumber22.body.allowGravity = false;
        
        coinNumber28.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber28);
        coinNumber28.body.allowGravity = false;
        
        coinNumber33.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber33);
        coinNumber33.body.allowGravity = false;
        
        coinNumber39.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber39);
        coinNumber39.body.allowGravity = false;
        
        coinNumber48.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber48);
        coinNumber48.body.allowGravity = false;
        
        coinNumber51.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber51);
        coinNumber51.body.allowGravity = false;
        
        coinNumber55.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber55);
        coinNumber55.body.allowGravity = false;
        
        coinNumber56.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber56);
        coinNumber56.body.allowGravity = false;
        
        coinNumber58.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber58);
        coinNumber58.body.allowGravity = false;
        
        coinNumber60.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber60);
        coinNumber60.body.allowGravity = false;
        
        coinNumber62.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber62);
        coinNumber62.body.allowGravity = false;
        
        coinNumber63.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber63);
        coinNumber63.body.allowGravity = false;
        
        coinNumber64.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber64);
        coinNumber64.body.allowGravity = false;
        
        coinNumber65.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber65);
        coinNumber65.body.allowGravity = false;
        
        coinNumber69.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber69);
        coinNumber69.body.allowGravity = false;
        
        coinNumber70.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber70);
        coinNumber70.body.allowGravity = false;
        
        coinNumber75.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber75);
        coinNumber75.body.allowGravity = false;
        
        coinNumber76.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber76);
        coinNumber76.body.allowGravity = false;
        
        coinNumber80.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber80);
        coinNumber80.body.allowGravity = false;
        
        coinNumber81.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber81);
        coinNumber81.body.allowGravity = false;
        
        coinNumber84.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber84);
        coinNumber84.body.allowGravity = false;
        
        coinNumber85.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber85);
        coinNumber85.body.allowGravity = false;
        
        coinNumber87.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber87);
        coinNumber87.body.allowGravity = false;
        
        coinNumber90.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber90);
        coinNumber90.body.allowGravity = false;
        
        coinNumber93.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber93);
        coinNumber93.body.allowGravity = false;
        
         coinNumber95.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber95);
        coinNumber95.body.allowGravity = false;
        
        coinNumber98.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber98);
        coinNumber98.body.allowGravity = false;
        
        coinNumber99.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber99);
        coinNumber99.body.allowGravity = false;
        
        coinNumber100.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(coinNumber100);
        coinNumber100.body.allowGravity = false;
       
        
        luckybox = this.game.add.sprite(2050,450,'luckybox');
        this.physics.arcade.enable(luckybox);
        luckybox.body.allowGravity = false;
        luckybox.body.immovable = true;
        
        hint = this.game.add.sprite(2850,100,'hint');
        this.physics.arcade.enable(hint);
        hint.body.allowGravity = false;
        hint.body.immovable = true;
        
        teleport = this.game.add.sprite(6700,600,'teleport');
        teleport.scale.setTo(0.5);
        this.physics.arcade.enable(teleport);
        teleport.body.allowGravity = false;
        teleport.body.immovable = true;
        
         teleport2 = this.game.add.sprite(6100,600,'teleport2');
        teleport2.scale.setTo(0.5);
        this.physics.arcade.enable(teleport2);
        teleport2.body.allowGravity = false;
        teleport2.body.immovable = true;
        
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
        
        lathos2 = this.add.sprite(900,100,'lathos2');
        lathos3 = this.add.sprite(900,100,'lathos3');
        lathos5 = this.add.sprite(900,100,'lathos5');
        lathos2.visible = false;
        lathos3.visible = false;
        lathos5.visible = false;
        lathos10 = this.add.sprite(900,100,'lathos10');
        lathos10.visible = false;
        lathos2.fixedToCamera = true;
        lathos3.fixedToCamera = true;
        lathos5.fixedToCamera = true;
        lathos10.fixedToCamera = true;
        
        heartbonus = this.add.sprite(600,100,'heartbonus');
        heartbonus.visible = false;
        heartbonus.fixedToCamera = true;
        
        key = this.game.add.sprite(7550,530,'key');
        key.anchor.setTo(0.5,0.5);
        key.scale.setTo(0.1);
        this.physics.arcade.enable(key);
        key.body.allowGravity = false;
        key.visible = false;
        
        
        
        
         flag = this.game.add.sprite(7550,530,'flag');
        flag.scale.setTo(0.5);
        this.physics.arcade.enable(flag);
        flag.body.allowGravity = false;
        
        weapon = this.game.add.weapon(1,'bullet2');
        weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
        weapon.bulletLifespan = 400;
        weapon.bulletSpeed = 600;
        weapon.trackSprite(player, 14, 0,false);
        weapon.bulletGravity.y = -1400;
        
        this.input.onDown.add(this.jump2,this);
        
    },
        
    update:function(){
        
        this.physics.arcade.collide(player,layer);
        this.physics.arcade.collide(propel,layer);
        this.physics.arcade.collide(player,enemy1.bird,this.resetPlayer);
        this.physics.arcade.collide(player,enemy2.bird,this.resetPlayer);
         this.physics.arcade.collide(player,enemy3.bird,this.resetPlayer);
         this.physics.arcade.collide(player,enemy4.bird,this.resetPlayer);
        this.physics.arcade.collide(weapon.bullets,enemy1.bird,this.killenemy);
        this.physics.arcade.collide(weapon.bullets,enemy2.bird,this.killenemy);
        this.physics.arcade.collide(weapon.bullets,enemy3.bird,this.killenemy);
        this.physics.arcade.collide(weapon.bullets,enemy4.bird,this.killenemy);
        this.physics.arcade.collide(weapon.bullets,goomba,this.killgoomba);
        this.physics.arcade.collide(weapon.bullets,raccoon,this.killraccoon);
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
        this.physics.arcade.collide(player,heart3,this.killheart3);
        this.physics.arcade.collide(player,luckybox,this.luckybox);
        this.physics.arcade.collide(player,luckybox2,this.luckybox2);
        this.physics.arcade.collide(player,hint,this.hint);
        this.physics.arcade.collide(player,teleport,this.teleport);
        this.physics.arcade.collide(player,teleport2,this.teleport2);
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
        this.physics.arcade.collide(player,coinNumber22,this.killCoin22);
        this.physics.arcade.collide(player,coinNumber28,this.killCoin28);
        this.physics.arcade.collide(player,coinNumber33,this.killCoin33);
        this.physics.arcade.collide(player,coinNumber39,this.killCoin39);
        this.physics.arcade.collide(player,coinNumber48,this.killCoin48);
        this.physics.arcade.collide(player,coinNumber51,this.killCoin51);
        this.physics.arcade.collide(player,coinNumber55,this.killCoin55);
        this.physics.arcade.collide(player,coinNumber56,this.killCoin56);
        this.physics.arcade.collide(player,coinNumber58,this.killCoin58);
        this.physics.arcade.collide(player,coinNumber60,this.killCoin60);
        this.physics.arcade.collide(player,coinNumber62,this.killCoin62);
        this.physics.arcade.collide(player,coinNumber63,this.killCoin63);
        this.physics.arcade.collide(player,coinNumber64,this.killCoin64);
        this.physics.arcade.collide(player,coinNumber65,this.killCoin65);
        this.physics.arcade.collide(player,coinNumber69,this.killCoin69);
        this.physics.arcade.collide(player,coinNumber70,this.killCoin70);
        this.physics.arcade.collide(player,coinNumber75,this.killCoin75);
        this.physics.arcade.collide(player,coinNumber76,this.killCoin76);
        this.physics.arcade.collide(player,coinNumber80,this.killCoin80);
        this.physics.arcade.collide(player,coinNumber81,this.killCoin81);
        this.physics.arcade.collide(player,coinNumber84,this.killCoin84);
        this.physics.arcade.collide(player,coinNumber85,this.killCoin85);
        this.physics.arcade.collide(player,coinNumber87,this.killCoin87);
        this.physics.arcade.collide(player,coinNumber90,this.killCoin90);
        this.physics.arcade.collide(player,coinNumber93,this.killCoin93);
        this.physics.arcade.collide(player,coinNumber95,this.killCoin95);
        this.physics.arcade.collide(player,coinNumber98,this.killCoin98);
        this.physics.arcade.collide(player,coinNumber99,this.killCoin99);
        this.physics.arcade.collide(player,coinNumber100,this.killCoin100);
        this.physics.arcade.collide(player,coinNumber110,this.killCoin110);
        this.physics.arcade.collide(player,coinNumber120,this.killCoin120);
        this.physics.arcade.collide(player,coinNumber130,this.killCoin130);
        this.physics.arcade.collide(player,coinNumber140,this.killCoin140);
        this.physics.arcade.collide(player,coinNumber150,this.killCoin150);
        this.physics.arcade.collide(player,coinNumber160,this.killCoin160);
        this.physics.arcade.collide(player,coinNumber170,this.killCoin170);
        this.physics.arcade.collide(player,coinNumber180,this.killCoin180);
        this.physics.arcade.collide(player,coinNumber190,this.killCoin190);
        this.physics.arcade.collide(player,coinNumber200,this.killCoin200);
        this.physics.arcade.collide(player,coinNumber300,this.killCoin300);
        
        
         this.physics.arcade.collide(weapon.bullets,coinNumber36,this.weaponCoin36);
        this.physics.arcade.collide(weapon.bullets,coinNumber50,this.weaponCoin50);
        this.physics.arcade.collide(weapon.bullets,coinNumber10,this.weaponCoin10);
        this.physics.arcade.collide(weapon.bullets,coinNumber9,this.weaponCoin9);
        this.physics.arcade.collide(weapon.bullets,coinNumber4,this.weaponCoin4);
        this.physics.arcade.collide(weapon.bullets,coinNumber362,this.weaponCoin362);
        this.physics.arcade.collide(weapon.bullets,coinNumber452,this.weaponCoin452);
        this.physics.arcade.collide(weapon.bullets,coinNumber25,this.weaponCoin25);
        this.physics.arcade.collide(weapon.bullets,coinNumber102,this.weaponCoin102);
        this.physics.arcade.collide(weapon.bullets,coinNumber15,this.weaponCoin15);
        this.physics.arcade.collide(weapon.bullets,coinNumber27,this.weaponCoin27);
        this.physics.arcade.collide(weapon.bullets,coinNumber8,this.weaponCoin8);
        this.physics.arcade.collide(weapon.bullets,coinNumber12,this.weaponCoin12);
        this.physics.arcade.collide(weapon.bullets,coinNumber24,this.weaponCoin24);
        this.physics.arcade.collide(weapon.bullets,coinNumber352,this.weaponCoin352);
        this.physics.arcade.collide(weapon.bullets,coinNumber18,this.weaponCoin18);
        this.physics.arcade.collide(weapon.bullets,coinNumber252,this.weaponCoin252);
        this.physics.arcade.collide(weapon.bullets,coinNumber92,this.weaponCoin92);
        this.physics.arcade.collide(weapon.bullets,coinNumber20,this.weaponCoin20);
        this.physics.arcade.collide(weapon.bullets,coinNumber30,this.weaponCoin30);
        this.physics.arcade.collide(weapon.bullets,coinNumber35,this.weaponCoin35);
        this.physics.arcade.collide(weapon.bullets,coinNumber40,this.weaponCoin40);
        this.physics.arcade.collide(weapon.bullets,coinNumber45,this.weaponCoin45);
        this.physics.arcade.collide(weapon.bullets,coinNumber21,this.weaponCoin21);
        this.physics.arcade.collide(weapon.bullets,coinNumber272,this.weaponCoin272);
        this.physics.arcade.collide(weapon.bullets,coinNumber6,this.weaponCoin6);
        this.physics.arcade.collide(weapon.bullets,coinNumber14,this.weaponCoin14);
        this.physics.arcade.collide(weapon.bullets,coinNumber22,this.weaponCoin22);
        this.physics.arcade.collide(weapon.bullets,coinNumber28,this.weaponCoin28);
        this.physics.arcade.collide(weapon.bullets,coinNumber33,this.weaponCoin33);
        this.physics.arcade.collide(weapon.bullets,coinNumber39,this.weaponCoin39);
        this.physics.arcade.collide(weapon.bullets,coinNumber48,this.weaponCoin48);
        this.physics.arcade.collide(weapon.bullets,coinNumber51,this.weaponCoin51);
        this.physics.arcade.collide(weapon.bullets,coinNumber55,this.weaponCoin55);
        this.physics.arcade.collide(weapon.bullets,coinNumber56,this.weaponCoin56);
        this.physics.arcade.collide(weapon.bullets,coinNumber58,this.weaponCoin58);
        this.physics.arcade.collide(weapon.bullets,coinNumber60,this.weaponCoin60);
        this.physics.arcade.collide(weapon.bullets,coinNumber62,this.weaponCoin62);
        this.physics.arcade.collide(weapon.bullets,coinNumber63,this.weaponCoin63);
        this.physics.arcade.collide(weapon.bullets,coinNumber64,this.weaponCoin64);
        this.physics.arcade.collide(weapon.bullets,coinNumber65,this.weaponCoin65);
        this.physics.arcade.collide(weapon.bullets,coinNumber69,this.weaponCoin69);
        this.physics.arcade.collide(weapon.bullets,coinNumber70,this.weaponCoin70);
        this.physics.arcade.collide(weapon.bullets,coinNumber75,this.weaponCoin75);
        this.physics.arcade.collide(weapon.bullets,coinNumber76,this.weaponCoin76);
        this.physics.arcade.collide(weapon.bullets,coinNumber80,this.weaponCoin80);
        this.physics.arcade.collide(weapon.bullets,coinNumber81,this.weaponCoin81);
        this.physics.arcade.collide(weapon.bullets,coinNumber84,this.weaponCoin84);
        this.physics.arcade.collide(weapon.bullets,coinNumber85,this.weaponCoin85);
        this.physics.arcade.collide(weapon.bullets,coinNumber87,this.weaponCoin87);
        this.physics.arcade.collide(weapon.bullets,coinNumber90,this.weaponCoin90);
        this.physics.arcade.collide(weapon.bullets,coinNumber93,this.weaponCoin93);
        this.physics.arcade.collide(weapon.bullets,coinNumber95,this.weaponCoin95);
        this.physics.arcade.collide(weapon.bullets,coinNumber98,this.weaponCoin98);
        this.physics.arcade.collide(weapon.bullets,coinNumber99,this.weaponCoin99);
        this.physics.arcade.collide(weapon.bullets,coinNumber100,this.weaponCoin100);
        this.physics.arcade.collide(weapon.bullets,coinNumber110,this.weaponCoin110);
        this.physics.arcade.collide(weapon.bullets,coinNumber120,this.weaponCoin120);
        this.physics.arcade.collide(weapon.bullets,coinNumber130,this.weaponCoin130);
        this.physics.arcade.collide(weapon.bullets,coinNumber140,this.weaponCoin140);
        this.physics.arcade.collide(weapon.bullets,coinNumber150,this.weaponCoin150);
        this.physics.arcade.collide(weapon.bullets,coinNumber160,this.weaponCoin160);
        this.physics.arcade.collide(weapon.bullets,coinNumber170,this.weaponCoin170);
        this.physics.arcade.collide(weapon.bullets,coinNumber180,this.weaponCoin180);
        this.physics.arcade.collide(weapon.bullets,coinNumber190,this.weaponCoin190);
        this.physics.arcade.collide(weapon.bullets,coinNumber200,this.weaponCoin200);
        this.physics.arcade.collide(weapon.bullets,coinNumber300,this.weaponCoin300);
        
        this.physics.arcade.collide(player,flag,this.killFlag);
         this.physics.arcade.collide(player,key,this.killFlag);
        
        
        
        if(l5==1){
             this.time.events.add(Phaser.Timer.SECOND * 2, function(){
            lathos5.visible = false;
                 l5 =0;
        }); 
        }
        
        if(l10==1){
             this.time.events.add(Phaser.Timer.SECOND * 2, function(){
            lathos10.visible = false;
                 l10 =0;
        }); 
        }
        
        if(l3==1){
             this.time.events.add(Phaser.Timer.SECOND * 2, function(){
            lathos3.visible = false;
                 l3 =0;
        }); 
        }
        
        if(l2==1){
             this.time.events.add(Phaser.Timer.SECOND * 2, function(){
            lathos2.visible = false;
                 l2 =0;
        }); 
        }
        
        if(sum2>=10 || sum3>=10 || sum5>=10 || sum10>=10){
            key.visible = true;
            key.angle +=2;
            flag.visible = false;
        }
        
        
        
        if(hs==1){
             this.time.events.add(Phaser.Timer.SECOND * 3, function(){
            heartbonus.visible = false;
                 hs =0;
             });
        }
      
          
     
        if(telos==1){
            music.stop();
            if(sum2>=10 || sum3>=10 || sum5>=10 || sum10>=10){
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
                facing = 'right';
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
                 facing = 'left';
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
        
        if(controls.shoot.isDown){
          //  this.shootBullet();
            //weapon.fire();
            if(facing == 'right'){
                weapon.fireAngle = Phaser.ANGLE_RIGHT;
                weapon.fire();
            }
            if(facing =='left'){
                weapon.fireAngle = Phaser.ANGLE_LEFT;
                weapon.fire();
            }
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
        
        //if(checkOverlap(bullets,enemy1.bird)){
          //  enemy1.bird.kill();
            
        //}
        
     
        //}
        
        // if(checkOverlap(bullets,this.coinNumber2)){
          //  if(x==3){
            //this.coinNumber2.kill();
             //   score += 100;
       // this.sound.play('coin');
            //}
        //}
        if(wk==5){
            coinNumber300.visible=true;
           }
        
        
    },
    
   
    
    weaponCoin36:function(coinNumber36){
        coinNumber36.kill();
        if(x==5 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin362:function(coinNumber362){
        coinNumber362.kill();
        if(x==5 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin10:function(coinNumber10){
        coinNumber10.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==3){
                wk3=1;
            }
        }
    },
     weaponCoin50:function(coinNumber50){
        coinNumber50.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==3){
                wk3=1;
            }
        }
    },
     weaponCoin9:function(coinNumber9){
        coinNumber9.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==2){
                wk2=1;
            }
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
     weaponCoin4:function(coinNumber4){
        coinNumber4.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==3){
                wk3=1;
            }
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin452:function(coinNumber452){
        coinNumber452.kill();
        if(x==2 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==2){
                wk2=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin25:function(coinNumber25){
        coinNumber25.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==2){
                wk2=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
            if(wk==5 && x==3){
                wk3=1;
            }
        }
    },
    weaponCoin102:function(coinNumber102){
        coinNumber102.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==3){
                wk3=1;
            }
        }
    },
    weaponCoin15:function(coinNumber15){
        coinNumber15.kill();
        if(x==2 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==2){
                wk2=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin27:function(coinNumber27){
        coinNumber27.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==2){
                wk2=1;
            }
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin8:function(coinNumber8){
        coinNumber8.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==3){
                wk3=1;
            }
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin24:function(coinNumber24){
        coinNumber24.kill();
        if(x==5 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin12:function(coinNumber12){
        coinNumber12.kill();
        if(x==5 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin92:function(coinNumber92){
        coinNumber92.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
            if(wk==5 && x==2){
                wk2=1;
            }
            if(wk==5 && x==5){
                wk5=1;
            }
            if(wk==5 && x==10){
                wk10=1;
            }
        }
    },
    weaponCoin352:function(coinNumber352){
        coinNumber352.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin18:function(coinNumber18){
        coinNumber18.kill();
        if(x==3 || x==2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin252:function(coinNumber252){
        coinNumber252.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin20:function(coinNumber20){
        coinNumber20.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin30:function(coinNumber30){
        coinNumber30.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin40:function(coinNumber40){
        coinNumber40.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin35:function(coinNumber35){
        coinNumber35.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin45:function(coinNumber45){
        coinNumber45.kill();
        if(x==2 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin21:function(coinNumber21){
        coinNumber21.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin272:function(coinNumber272){
        coinNumber272.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin6:function(coinNumber6){
        coinNumber6.kill();
        if(x==5 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin14:function(coinNumber14){
        coinNumber14.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin22:function(coinNumber22){
        coinNumber22.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin28:function(coinNumber28){
        coinNumber28.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin33:function(coinNumber33){
        coinNumber33.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin39:function(coinNumber39){
        coinNumber39.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin48:function(coinNumber48){
        coinNumber48.kill();
        if(x==5 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin51:function(coinNumber51){
        coinNumber51.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin55:function(coinNumber55){
        coinNumber55.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin56:function(coinNumber56){
        coinNumber56.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin58:function(coinNumber58){
        coinNumber58.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin60:function(coinNumber60){
        coinNumber60.kill();
        if(x==5 || x==10 || x==3 || x==2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin62:function(coinNumber62){
        coinNumber62.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin63:function(coinNumber63){
        coinNumber63.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin64:function(coinNumber64){
        coinNumber64.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin65:function(coinNumber65){
        coinNumber65.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin69:function(coinNumber69){
        coinNumber69.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin70:function(coinNumber70){
        coinNumber70.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin75:function(coinNumber75){
        coinNumber75.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin76:function(coinNumber76){
        coinNumber76.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin80:function(coinNumber80){
        coinNumber80.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin81:function(coinNumber81){
        coinNumber81.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin84:function(coinNumber84){
        coinNumber84.kill();
        if(x==5 || x==10){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin85:function(coinNumber85){
        coinNumber85.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin87:function(coinNumber87){
        coinNumber87.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin90:function(coinNumber90){
        coinNumber90.kill();
                life +=1;
                lifeText.text = life;
            wk +=1;
           },
     weaponCoin93:function(coinNumber93){
        coinNumber93.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin95:function(coinNumber95){
        coinNumber95.kill();
        if(x!=5){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin98:function(coinNumber98){
        coinNumber98.kill();
        if(x!=2){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin99:function(coinNumber99){
        coinNumber99.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin100:function(coinNumber100){
        coinNumber100.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin110:function(coinNumber110){
        coinNumber110.kill();
        if(x!=3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin120:function(coinNumber120){
        coinNumber120.kill();
             life +=1;
                lifeText.text = life;
            wk +=1;
           },
     weaponCoin130:function(coinNumber130){
        coinNumber130.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin140:function(coinNumber140){
        coinNumber140.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin150:function(coinNumber150){
        coinNumber150.kill();
                 life +=1;
                lifeText.text = life;
            wk +=1;
    },
     weaponCoin160:function(coinNumber160){
        coinNumber160.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin170:function(coinNumber170){
        coinNumber170.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin180:function(coinNumber180){
        coinNumber180.kill();
             life +=1;
                lifeText.text = life;
            wk +=1;
    },
     weaponCoin190:function(coinNumber190){
        coinNumber190.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
     weaponCoin200:function(coinNumber200){
        coinNumber200.kill();
        if(x==3){
             life +=1;
                lifeText.text = life;
            wk +=1;
           }
    },
    weaponCoin300:function(coinNumber300){
        coinNumber300.kill();
        
             life +=1;
                lifeText.text = life;
            wk +=1;
           
    },
    teleport:function(player,teleport){
        if(player.body.touching.down){
            player.reset(6200,560);
        }
    },
    
    teleport2:function(player,teleport2){
        if(player.body.touching.down){
            player.reset(6800,560);
        }
    },
    
    
    
   
    
    jump2:function(){
         player.body.velocity.y = -800;
            jumpTimer = this.time.now + 750;
            player.animations.play('jump');
            this.sound.play('jump');
    },
    
    killenemy:function(enemy1){
        enemy1.kill();
        hitenemy.play();
    },
    
    killgoomba:function(goomba){
        goomba.kill();
        hitenemy.play();
    },
    
     killraccoon:function(raccoon){
        raccoon.kill();
        hitenemy.play();
    },
    
    resetPlayer2:function(){
        if(player.x<=1000){
                 player.reset(100,560);
            }
            if(player.x>1000 && player.x<=2050){
                player.reset(1020,560);
            }
            if(player.x>2050 && player.x<=3000){
                player.reset(2050,560);
            }
            if(player.x>3000 && player.x<=4300){
                player.reset(3000,560);
            }
            if(player.x>4300 && player.x<=4900){
                player.reset(4100,560);
            }
            if(player.x>4900 && player.x<=5800){
                player.reset(4900,560);
            }
            if(player.x>5800 && player.x<=6400){
                player.reset(5800,300);
            }
            if(player.x>6400){
                player.reset(6400,150);
            }
        life = life - 1;
        lifeText.text = life;
        lose.play();
    },
    
    resetPlayer:function(player,enemy1){ 
        if(player.body.touching.down){
            hitenemy.play();
            enemy1.kill();
         
        }
        else{
            if(player.x<=1000){
                 player.reset(100,560);
            }
            if(player.x>1000 && player.x<=2050){
                player.reset(1020,560);
            }
            if(player.x>2050 && player.x<=3000){
                player.reset(2050,560);
            }
            if(player.x>3000 && player.x<=4300){
                player.reset(3000,560);
            }
            if(player.x>4300 && player.x<=4900){
                player.reset(4100,560);
            }
            if(player.x>4900 && player.x<=5800){
                player.reset(4900,560);
            }
            if(player.x>5800 && player.x<=6400){
                player.reset(5800,300);
            }
            if(player.x>6400){
                player.reset(6400,150);
            }
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
       if(player.x<=1000){
                 player.reset(100,560);
            }
            if(player.x>1000 && player.x<=2050){
                player.reset(1020,560);
            }
            if(player.x>2050 && player.x<=3000){
                player.reset(2050,560);
            }
            if(player.x>3000 && player.x<=4300){
                player.reset(3000,560);
            }
            if(player.x>4300 && player.x<=4900){
                player.reset(4100,560);
            }
            if(player.x>4900 && player.x<=5800){
                player.reset(4900,560);
            }
            if(player.x>5800 && player.x<=6400){
                player.reset(5800,300);
            }
            if(player.x>6400){
                player.reset(6400,150);
            }
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
        if(player.x<=1000){
                 player.reset(100,560);
            }
            if(player.x>1000 && player.x<=2050){
                player.reset(1020,560);
            }
            if(player.x>2050 && player.x<=3000){
                player.reset(2050,560);
            }
            if(player.x>3000 && player.x<=4300){
                player.reset(3000,560);
            }
            if(player.x>4300 && player.x<=4900){
                player.reset(4100,560);
            }
            if(player.x>4900 && player.x<=5800){
                player.reset(4900,560);
            }
            if(player.x>5800 && player.x<=6400){
                player.reset(5800,300);
            }
            if(player.x>6400){
                player.reset(6400,150);
            };
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
        if(player.x<=1000){
                 player.reset(100,560);
            }
            if(player.x>1000 && player.x<=2050){
                player.reset(1020,560);
            }
            if(player.x>2050 && player.x<=3000){
                player.reset(2050,560);
            }
            if(player.x>3000 && player.x<=4300){
                player.reset(3000,560);
            }
            if(player.x>4300 && player.x<=4900){
                player.reset(4100,560);
            }
            if(player.x>4900 && player.x<=5800){
                player.reset(4900,560);
            }
            if(player.x>5800 && player.x<=6400){
                player.reset(5800,300);
            }
            if(player.x>6400){
                player.reset(6400,150);
            }
        life = life -1;
        lifeText.text = life;
        lose.play();
    },
    
    killP:function(){
        if(player.x<=1000){
                 player.reset(100,560);
            }
            if(player.x>1000 && player.x<=2050){
                player.reset(1020,560);
            }
            if(player.x>2050 && player.x<=3000){
                player.reset(2050,560);
            }
            if(player.x>3000 && player.x<=4300){
                player.reset(3000,560);
            }
            if(player.x>4300 && player.x<=4900){
                player.reset(4100,560);
            }
            if(player.x>4900 && player.x<=5800){
                player.reset(4900,560);
            }
            if(player.x>5800 && player.x<=6400){
                player.reset(5800,300);
            }
            if(player.x>6400){
                player.reset(6400,150);
            }
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('12');
            //life = life - 1;
           // lifeText.text = life;
            audioStomp.play();
            coinNumber12.kill();
            lathos +=1;
            player.reset(coinNumber12.x,coinNumber12.y);
            if(x==5){
            lathos5.visible = true;
            l5=1;
        }
        if(x==10){
            lathos10.visible = true;
            l10=1;
        }
        }
    },
    
    weaponCoin:function(c){
        c.kill();
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            //life = life - 1;
           // lifeText.text = life;
            apotelesmata.push('6');
            
            audioStomp.play();
            coinNumber6.kill();
            lathos +=1;
            player.reset(coinNumber6.x,coinNumber6.y);
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
        }
    },
    
     killheart2:function(player,heart2){
       
       life = life + 1;
       lifeText.text = life;
       hitenemy.play();
       heart2.kill();
        
    },
    
     killheart3:function(player,heart3){
       
       life = life + 1;
       lifeText.text = life;
       hitenemy.play();
       heart3.kill();
        
    },
    
     luckybox:function(player,luckybox){
       coinNumber92.visible = true;
         hit.play();
         },
    
    hint:function(player,hint){
        hint.kill();
        if(x==2){
       hint2.visible = true;
        }
        if(x==3){
            hint3.visible = true;
        }
        if(x==5){
            hint5.visible = true;
        }
        if(x==10){
            hint10.visible = true;
        }
         },
    
    luckybox2:function(player,luckybox2){
       coinNumber252.visible = true;
         hit.play();
         },
    
     killCoin50:function(player,coinNumber50){
       
        if(x==2 || x==5 || x==10){
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('50');
           // life = life - 1;
           // lifeText.text = life;
            audioStomp.play();
            coinNumber50.kill();
            lathos +=1;
            player.reset(coinNumber50.x,coinNumber50.y);
            lathos3.visible = true;
            l3=1;
        }
    },
    
     killCoin30:function(player,coinNumber30){
       
        if(x==2 || x==3 || x==5 || x==10){
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('30');
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('21');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber21.kill();
            lathos +=1;
            player.reset(coinNumber21.x,coinNumber21.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
        }
    },
    
     killCoin22:function(player,coinNumber22){
       
        if(x==2){
            coinNumber22.reset(coinNumber22.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('22');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber22.kill();
            lathos +=1;
           player.reset(coinNumber22.x,coinNumber22.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin28:function(player,coinNumber28){
       
        if(x==2){
            coinNumber28.reset(coinNumber28.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('28');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber28.kill();
            lathos +=1;
             player.reset(coinNumber28.x,coinNumber28.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin33:function(player,coinNumber33){
       
        if(x==3){
            coinNumber33.reset(coinNumber33.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('33');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber33.kill();
            lathos +=1;
            player.reset(coinNumber33.x,coinNumber33.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin39:function(player,coinNumber39){
       
        if(x==3){
            coinNumber39.reset(coinNumber39.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('39');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber39.kill();
            lathos +=1;
            player.reset(coinNumber39.x,coinNumber39.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin48:function(player,coinNumber48){
       
        if(x==2 || x==3){
            coinNumber48.reset(coinNumber48.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('48');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber48.kill();
            lathos +=1;
            player.reset(coinNumber48.x,coinNumber48.y);
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin51:function(player,coinNumber51){
       
        if(x==3){
            coinNumber51.reset(coinNumber51.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('51');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber51.kill();
            lathos +=1;
            player.reset(coinNumber51.x,coinNumber51.y);            
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin55:function(player,coinNumber55){
       
        if(x==5){
            coinNumber55.reset(coinNumber55.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('55');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber55.kill();
            lathos +=1;
            player.reset(coinNumber55.x,coinNumber55.y);            
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin56:function(player,coinNumber56){
       
        if(x==2){
            coinNumber56.reset(coinNumber56.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('56');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber56.kill();
            lathos +=1;
            player.reset(coinNumber56.x,coinNumber56.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin58:function(player,coinNumber58){
       
        if(x==2){
            coinNumber58.reset(coinNumber58.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('58');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber58.kill();
            lathos +=1;
            player.reset(coinNumber58.x,coinNumber58.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin60:function(player,coinNumber60){
       
        if(x==2 || x==5 || x==3 || x==10){
            coinNumber60.reset(coinNumber60.x,25);
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('60');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber60.kill();
            lathos +=1;
        }
    },
    
    killCoin62:function(player,coinNumber62){
       
        if(x==2){
            coinNumber62.reset(coinNumber62.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('62');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber62.kill();
            lathos +=1;
            player.reset(coinNumber62.x,coinNumber62.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin63:function(player,coinNumber63){
       
        if(x==3){
            coinNumber63.reset(coinNumber63.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('63');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber63.kill();
            lathos +=1;
            player.reset(coinNumber63.x,coinNumber63.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin64:function(player,coinNumber64){
       
        if(x==2){
            coinNumber64.reset(coinNumber64.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('64');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber64.kill();
            lathos +=1;
            player.reset(coinNumber64.x,coinNumber64.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin65:function(player,coinNumber65){
       
        if(x==5){
            coinNumber65.reset(coinNumber65.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('65');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber65.kill();
            lathos +=1;
            player.reset(coinNumber65.x,coinNumber65.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin69:function(player,coinNumber69){
       
        if(x==3){
            coinNumber69.reset(coinNumber69.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('69');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber69.kill();
            lathos +=1;
            player.reset(coinNumber69.x,coinNumber69.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin70:function(player,coinNumber70){
       
        if(x==2 || x==5 || x==10){
            coinNumber70.reset(coinNumber70.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('70');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber70.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber70.x,coinNumber70.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
    killCoin75:function(player,coinNumber75){
       
        if(x==5 || x==3){
            coinNumber75.reset(coinNumber75.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==5){
            sum5 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('75');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber75.kill();
            lathos +=1;
            player.reset(coinNumber75.x,coinNumber75.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin76:function(player,coinNumber76){
       
        if(x==2){
            coinNumber76.reset(coinNumber76.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('76');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber76.kill();
            lathos +=1;
            player.reset(coinNumber76.x,coinNumber76.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin80:function(player,coinNumber80){
       
        if(x==2 || x==5 || x==10){
            coinNumber80.reset(coinNumber80.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('80');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber80.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber80.x,coinNumber80.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
    killCoin81:function(player,coinNumber81){
       
        if(x==3){
            coinNumber81.reset(coinNumber81.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('81');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber81.kill();
            lathos +=1;
            player.reset(coinNumber81.x,coinNumber81.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin84:function(player,coinNumber84){
       
        if(x==2 || x==3){
            coinNumber84.reset(coinNumber84.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('84');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber84.kill();
            lathos +=1;
            player.reset(coinNumber84.x,coinNumber84.y);
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
        
        killCoin85:function(player,coinNumber85){
       
        if(x==5){
            coinNumber85.reset(coinNumber85.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('85');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber85.kill();
            lathos +=1;
            player.reset(coinNumber85.x,coinNumber85.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
    
    killCoin87:function(player,coinNumber87){
       
        if(x==3){
            coinNumber87.reset(coinNumber87.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('87');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber87.kill();
            lathos +=1;
            player.reset(coinNumber87.x,coinNumber87.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
        
    killCoin90:function(player,coinNumber90){
       
        if(x==2 || x==3 || x==5 || x==10){
            coinNumber90.reset(coinNumber90.x,25);
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('90');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber90.kill();
            lathos +=1;
        }
    },
        
    killCoin93:function(player,coinNumber93){
       
        if(x==3){
            coinNumber93.reset(coinNumber93.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('93');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber93.kill();
            lathos +=1;
            player.reset(coinNumber93.x,coinNumber93.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
      
        killCoin95:function(player,coinNumber95){
       
        if(x==5){
            coinNumber95.reset(coinNumber95.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('95');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber95.kill();
            lathos +=1;
            player.reset(coinNumber95.x,coinNumber95.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
        
        killCoin98:function(player,coinNumber98){
       
        if(x==2){
            coinNumber98.reset(coinNumber98.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('98');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber98.kill();
            lathos +=1;
            player.reset(coinNumber98.x,coinNumber98.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
        
        killCoin99:function(player,coinNumber99){
       
        if(x==3){
            coinNumber99.reset(coinNumber99.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('99');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber99.kill();
            lathos +=1;
            player.reset(coinNumber99.x,coinNumber99.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
            lathos10.visible = true;
            l10=1;
            }
        }
    },
        
        killCoin100:function(player,coinNumber100){
       
        if(x==2 || x==5 || x==10){
            coinNumber100.reset(coinNumber100.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('100');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber100.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber100.x,coinNumber100.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin110:function(player,coinNumber110){
       
        if(x==2 || x==5 || x==10){
            coinNumber110.reset(coinNumber110.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('110');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber110.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber110.x,coinNumber110.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin120:function(player,coinNumber120){
       
        if(x==2 || x==5 || x==10 || x==3){
            coinNumber120.reset(coinNumber120.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('120');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber120.kill();
            lathos +=1;
                player.reset(coinNumber120.x,coinNumber120.y);
        }
    },
    
     killCoin130:function(player,coinNumber130){
       
        if(x==2 || x==5 || x==10){
            coinNumber130.reset(coinNumber130.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('130');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber130.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber130.x,coinNumber130.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin140:function(player,coinNumber140){
       
        if(x==2 || x==5 || x==10){
            coinNumber140.reset(coinNumber140.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('140');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber140.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber140.x,coinNumber140.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin150:function(player,coinNumber150){
       
        if(x==2 || x==5 || x==10 || x==3){
            coinNumber150.reset(coinNumber150.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('150');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber150.kill();
            lathos +=1;
                player.reset(coinNumber150.x,coinNumber150.y);
        }
    },
    
     killCoin160:function(player,coinNumber160){
       
        if(x==2 || x==5 || x==10){
            coinNumber160.reset(coinNumber160.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('160');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber160.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber160.x,coinNumber160.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin170:function(player,coinNumber170){
       
        if(x==2 || x==5 || x==10){
            coinNumber170.reset(coinNumber170.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('170');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber170.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber170.x,coinNumber170.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin180:function(player,coinNumber180){
       
        if(x==2 || x==5 || x==10 || x==3){
            coinNumber180.reset(coinNumber180.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('180');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber180.kill();
            lathos +=1;
                player.reset(coinNumber180.x,coinNumber180.y);
        }
    },
    
     killCoin190:function(player,coinNumber190){
       
        if(x==2 || x==5 || x==10){
            coinNumber190.reset(coinNumber190.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('190');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber190.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber190.x,coinNumber190.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
    
     killCoin200:function(player,coinNumber200){
       
        if(x==2 || x==5 || x==10){
            coinNumber200.reset(coinNumber200.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
            sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('200');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber200.kill();
            lathos +=1;
            if(x==3){
                player.reset(coinNumber200.x,coinNumber200.y);
            lathos3.visible = true;
            l3=1;
            }
        }
    },
     killCoin300:function(player,coinNumber300){
       
        if(x==2 || x==5 || x==10 || x==3){
            coinNumber300.reset(coinNumber300.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            if(x==2){
                sum2 +=1;
            }
            if(x==5){
                sum5 +=1;
            }
            if(x==10){
                sum10 +=1;
            }
            if(x==3){
                sum3 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('150');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber300.kill();
            lathos +=1;
                player.reset(coinNumber300.x,coinNumber300.y);
        }
    },
    
    killCoin272:function(player,coinNumber272){
       
        if(x==3){
            coinNumber272.reset(coinNumber272.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum3 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('27');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber272.kill();
            lathos +=1;
            player.reset(coinNumber272.x,coinNumber272.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('35');
          //  life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber35.kill();
            lathos +=1;
            player.reset(coinNumber35.x,coinNumber35.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
        }
    },
    
     killCoin40:function(player,coinNumber40){
       
        if(x==2 || x==5 || x==10){
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('40');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber40.kill();
            lathos +=1;
                player.reset(coinNumber40.x,coinNumber40.y);
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('45');
          //  life = life - 1;
          //  lifeText.text = life;
            audioStomp.play();
            coinNumber45.kill();
            lathos +=1;
            player.reset(coinNumber45.x,coinNumber45.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
        }
    },
    
     
    
    killCoin20:function(player,coinNumber20){
       
        if(x==2 || x==5 || x==10){
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('20');
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber20.kill();
            lathos +=1;
                player.reset(coinNumber20.x,coinNumber20.y);
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('9');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber9.kill();
            lathos +=1;
            player.reset(coinNumber9.x,coinNumber9.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('9');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber92.kill();
            player.reset(coinNumber92.x,coinNumber92.y);
            coinNumber92.reset(8500,1000);
            lathos +=1;
           if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('25');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber252.kill();
            player.reset(coinNumber252.x,coinNumber252.y);
            coinNumber252.reset(8600,1000);
            lathos +=1;
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('27');
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber27.kill();
            lathos +=1;
            player.reset(coinNumber27.x,coinNumber27.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
        
        if(x==2 || x==5 || x==10){
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('10');
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber10.kill();
            lathos +=1;
            player.reset(coinNumber10.x,coinNumber10.y);
            lathos3.visible = true;
            l3=1;
        }
    },
    
     killCoin102:function(player,coinNumber102){
        
        if(x==2 || x==5 || x==10){
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
            if(x==10){
                sum10 +=1;
            }
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('10');
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber102.kill();
            lathos +=1;
                player.reset(coinNumber102.x,coinNumber102.y);
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('15');
         //   life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber15.kill();
            lathos +=1;
                player.reset(coinNumber15.x,coinNumber15.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('4');
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber4.kill();
            lathos +=1;
            player.reset(coinNumber4.x,coinNumber4.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('14');
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber14.kill();
            lathos +=1;
            player.reset(coinNumber14.x,coinNumber14.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('35');
       //     life = life - 1;
       //     lifeText.text = life;
            audioStomp.play();
            coinNumber352.kill();
            lathos +=1;
            player.reset(coinNumber352.x,coinNumber352.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('45');
        //    life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber452.kill();
            lathos +=1;
                player.reset(coinNumber452.x,coinNumber452.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
        }
    },
    
     killCoin8:function(player,coinNumber8){
        
        if(x==2){
            coinNumber8.reset(coinNumber8.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum2 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('8');
       //     life = life - 1;
        //    lifeText.text = life;
            audioStomp.play();
            coinNumber8.kill();
            lathos +=1;
            player.reset(coinNumber8.x,coinNumber8.y);
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('24');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber24.kill();
            lathos +=1;
                player.reset(coinNumber24.x,coinNumber24.y);
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('18');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber18.kill();
            lathos +=1;
                player.reset(coinNumber18.x,coinNumber18.y);
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
        }
    },
    
    killCoin25:function(player,coinNumber25){
       
        if(x==5){
            coinNumber25.reset(coinNumber25.x,25);
        score += 100;
            scoreText.text = 'Score: ' + score;
        audioCoin.play();
            sum5 +=1;
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('25');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber25.kill();
            lathos +=1;
            player.reset(coinNumber25.x,coinNumber25.y);
            if(x==2){
            lathos2.visible = true;
            l2=1;
            }
            if(x==3){
            lathos3.visible = true;
            l3=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
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
            if(sum2==5 || sum3==5 || sum5==5 || sum10==5){
                life +=1;
                lifeText.text = life;
                heartbonus.visible = true;
                hs=1;
            }
        }
        else{
            apotelesmata.push('36');
         //   life = life - 1;
         //   lifeText.text = life;
            audioStomp.play();
            coinNumber36.kill();
            lathos +=1;
                player.reset(coinNumber36.x,coinNumber36.y);
            if(x==5){
            lathos5.visible = true;
            l5=1;
            }
            if(x==10){
                lathos10.visible = true;
                l10=1;
            }
        }
    },
    
    shuffle:function(a,b){
        var j,x,i,y;
        for(i = a.length-1; i>0; i--){
             j = Math.floor(Math.random() * (i + 1));
             x = a[i];
            a[i] = a[j];
            a[j] = x;
            y = b[i];
            b[i] = b[j];
            b[j] = y;
        }
        return a,b;
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
                bullet.body.velocity.x = +600;
                shootTime = this.time.now + 900;
                bullet.body.allowGravity = false;
          
          }
    
      }
    }
    
    
}

//function checkOverlap(spriteA,spriteB){
    
  //  var boundsA = spriteA.getBounds();
    //var boundsB = spriteB.getBounds();
    
   //return Phaser.Rectangle.intersects(boundsA,boundsB); 
//}







