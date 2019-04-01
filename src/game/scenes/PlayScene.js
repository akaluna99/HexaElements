import { Scene } from 'phaser';

let posX = 0
let posY = 0
let tamany = 10
let tauler = [];
let tiles;
let layer;
let map;

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' });
  }

  create () {
    console.log("Starting PlayScene ...");
    //let i = this.add.image(400, 300, 'tile_set');
	 // Load a map from a 2D array of tile indices

	 let i;
	 for ( i = 0; i < tamany; i ++){
		 let j;
		 tauler[i] = []
		 for ( j = 0; j < tamany; j ++){
			if (( j + i) % 2 == 0 ){
				tauler[i].push(0);
			}
			else{
				tauler[i].push(1);
			}
		 }
	 }
	//console.log(tauler)

	// When loading from an array, make sure to specify the tileWidth and tileHeight
	map = this.make.tilemap({ data: tauler, tileWidth: 16, tileHeight: 16 });
	tiles = map.addTilesetImage('tile_set');
	layer = map.createStaticLayer(0, tiles);
  }

  update () {
	tauler[posX][posY] = 3;
	posX += 1
	if (posX == tamany){
		posY += 1;
		posX = 0;
		if (posY == tamany){
			posX = 0;
			posY = 0;
		}
	}
	map = this.make.tilemap({ data: tauler, tileWidth: 16, tileHeight: 16 });
	tiles = map.addTilesetImage('tile_set');
	layer = map.createStaticLayer(0, tiles);
  }
    
}
