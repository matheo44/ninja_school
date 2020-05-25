const config = {
    width: 1617,
    height: 600,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config)
function preload(){
    console.log('ok 1')
    this.load.image('bg', 'images/bg.jpg')
    this.load.spritesheet('sleep', 'images/ninjaSleep.png', { frameWidth: 68, frameHeight: 103, startFrame:0, endFrame:3, margin:-5});
    this.load.spritesheet('player1.2', 'images/ninjaRun.png', { frameWidth: 103, frameHeight: 95, startFrame:0, endFrame:1, margin:0});
    this.load.spritesheet('ninjaHit', 'images/test.png', { frameWidth: 75, frameHeight: 110, startFrame:0, endFrame:1, margin:0});
    this.load.spritesheet('shuriken', 'images/shuriken.png',{frameWidth: 323, frameHeight: 357, startFrame:0, endFrame:1, margine:0});
}
function create(){
    console.log('ok 2')
    this.add.image(400, 210, 'bg')

   
    // chargement de l'image d'animation
    let anim = this.anims.create({
        key:'sleep',
        frames:this.anims.generateFrameNumbers('sleep'),
        frameRate: 2,
       // yoyo: false,
        repeat: -1          
    })
   sprite = this.physics.add.sprite(600, 500, 'sleep').setScale(1.1);
  
  
    sprite.body.collideWorldBounds = true;

    let anim1 = this.anims.create({
        key:'walk',
        frames:this.anims.generateFrameNumbers('player1.2'),
        frameRate: 6,
       // yoyo: false,
        repeat: -1          
    })
    console.log(anim1)
   
       
    sprite1 = this.physics.add.sprite(500, 500, 'player1.2').setScale(1.1);
    sprite1.body.collideWorldBounds = true;
    
    //sprite1.setbounce(0.2); le setbounce est a débuguer

    let ninjaHit = this.anims.create({
        key:'ninjaHit',
        frames:this.anims.generateFrameNumbers('ninjaHit'),
        frameRate: 3,
        repeat: 0 
    })
    spriteNinjaHit = this.physics.add.sprite(1000, 500, 'ninjaHit').setScale(1.1);
    spriteNinjaHit.body.collideWorldBounds = true;

    let animShuriken = this.anims.create({
        key:'shuriken',
        frame: this.anims.generateFrameNumbers('shuriken'),
        frameRate: 3,
        repeat: 0
    })
    spriteShuriken = this.add.sprite(1030, 550, 'shuriken').setScale(0.1);
    spriteShuriken.anims.play('shuriken', true)
    cursors = this.input.keyboard.createCursorKeys()
} 
function update(){
   
    if (cursors.left.isDown)
    {
        
       // sprite1.setVelocityX(nX);
        sprite1.setVelocityX(-300);
        sprite1.setFlip(true, false);
        console.log('ok83')
        sprite1.anims.play('walk', true);
        sprite.anims.play('sleep', false);

    }
    

    else if (cursors.right.isDown)
    {
        
        sprite1.setVelocityX(300);
        sprite1.setFlip(false, false);
        sprite1.anims.play('walk', true);
        sprite.anims.play('sleep', false);

    }
    
    else
    {
       
        sprite1.setVelocityX(0);
    
        sprite1.anims.play('walk', false); 


    }
    
    if (cursors.up.isDown && sprite1.body.blocked.down) 
    {
           sprite1.setVelocityY(-330)
           sprite.anims.play('sleep', false);

    }       
    if(cursors.space.isDown){
        spriteNinjaHit.anims.play('ninjaHit', true); 

    }
}
