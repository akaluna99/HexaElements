import { Scene } from 'phaser';

let bomb;

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' });
  }

  create () {
    console.log("Starting PlayScene ...");
    let i = this.add.image(400, 300, 'sky');

    bomb = this.physics.add.image(400, 200, 'bomb');
    bomb.setCollideWorldBounds(true);
    bomb.body.onWorldBounds = true; // enable worldbounds collision event
    bomb.setBounce(1);
    bomb.setVelocity(200, 20);
	 //  By default the Signal is empty, so we create it here:
    //bomb.body.onWorldBounds = new Phaser.Signal();

    //  And then listen for it
	//bomb.body.onWorldBounds.add(hitWorldBounds, this);
	//this.add.text(10, 10, bomb.body.position.x{ font: '48px Arial', fill: '#000000' });
	console.log(this.physics.bomb); //.bomb.body.position.x
  }

  update () {
	 //console.log(bomb.body.onWorldBounds)
  }
    
}
