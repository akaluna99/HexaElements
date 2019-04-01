import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'


function launch() {
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 600,
        height: 600,
		//zoom: 4,
		pixelArt: true,
        parent: 'game-container',
        /*physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 300},
                debug: false
            }
        },*/
        scene: [BootScene, PlayScene]
    })
}

export default launch
export {launch}
