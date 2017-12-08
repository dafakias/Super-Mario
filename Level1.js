//var game = {};




EnemyBird = function(index,game,x,y){
  this.bird = game.add.sprite(x,y,'bird');
  this.bird.anchor.setTo(0.5,0.5);
  this.bird.name = index.toString();
  game.physics.enable(this.bird,Phaser.Physics.ARCADE);
  this.bird.body.immovable = true;  
  this.bird.body.collideWorldBounds = true;   
  this.bird.body.allowGravity = false;    
    
  this.birdTween = game.add.tween(this.bird).to({y: this.bird.y + 100},2000,'Linear',true,0,100,true);    
}


var enemy1;

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


var score = 0;
var scoreText;


Game.Level1.prototype = {
    
    create:function(game){
       this.stage.backgroundColor = '#3A5963'; 
        
        this.physics.arcade.gravity.y = 1400;
        
        map = this.add.tilemap('map',16,16);
        map.addTilesetImage('tileset');
        layer = map.createLayer(0);
        layer.resizeWorld();
        
        map.setCollisionBetween(3,10);
        map.setTileIndexCallback(2,this.resetPlayer,this);
        map.setTileIndexCallback(1,this.getCoin,this);
        
        player = this.add.sprite(100,560,'player');
        player.anchor.setTo(0.5,0.5);
        player.animations.add('idle',[0,1],1,true);
        player.animations.add('jump',[2],1,true);
        player.animations.add('run', [3,4,5,6,7,8],7,true);
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
        scoreText = game.add.text(15,200,'Score:0',{font: '32px Arial',fill : '#fff'});
        
        
        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.UP),
        };
        
        
        enemy1 = new EnemyBird(0,game,player.x+350,player.y-450);
        
        bullets = game.add.group();
        
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(5,'bullet');
        bullets.setAll('anchor.x',0.5);
        bullets.setAll('anchor.y',0.5);
        
        bullets.setAll('outOfBoundsKill',true);
        bullets.setAll('checkWorldBounds',true);
        
        x = Math.floor(Math.random() * 6) + 1;
        
        
        this.coinNumber1 = this.game.add.sprite(100, 50, 'coin25');
        
        this.coinNumber2 = this.game.add.sprite(170,50,'coin9');
        
        this.coinNumber3 = this.game.add.sprite(240,50,'coin4');
        
        this.coinNumber4 = this.game.add.sprite(310,50,'coin1');
        
        this.coinNumber5 = this.game.add.sprite(380,50,'coin36');
    },
        
    update:function(){
        
        this.physics.arcade.collide(player,layer);
        this.physics.arcade.collide(player,enemy1.bird,this.resetPlayer);
        
        player.body.velocity.x = 0;
        
        
        
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
            player.body.velocity.y = -600;
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
        
        if(controls.shoot.isDown){
            this.shootBullet();
        }
        
        if(checkOverlap(bullets,enemy1.bird)){
            enemy1.bird.kill();
        }
        
        if(checkOverlap(bullets,this.coinNumber1)){
            if(x==5){
            this.coinNumber1.kill();
                score += 100;
        this.sound.play('coin');
            }
        }
        
         if(checkOverlap(bullets,this.coinNumber2)){
            if(x==3){
            this.coinNumber2.kill();
                score += 100;
        this.sound.play('coin');
            }
        }
        
         if(checkOverlap(bullets,this.coinNumber3)){
            if(x==2){
            this.coinNumber3.kill();
                score += 100;
        this.sound.play('coin');
            }
        }
        
         if(checkOverlap(bullets,this.coinNumber5)){
            if(x==6 || x==2 || x==3){
            this.coinNumber5.kill();
                score += 100;
        this.sound.play('coin');
            }
        }
        
        if(checkOverlap(bullets,this.coinNumber4)){
            if(x==1){
            this.coinNumber4.kill();
                score += 100;
        this.sound.play('coin');
            }
        }
        
        scoreText.text = 'Score:' + score; 
        
    },    
    
    resetPlayer:function(){
        player.reset(100,560);
    },
    
    getCoin:function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        score += 100;
        this.sound.play('coin');
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





