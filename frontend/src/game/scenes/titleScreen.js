import Phaser from 'phaser';

class TitleScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScreen' });
  }

  preload() {
    // Load any assets (images, sounds, etc.) that you need for your title screen here
    this.load.image('background', 'path/to/background-image.png');
  }

  create() {
    // Set up the title screen elements and logic
    this.add.image(400, 300, 'background');
    this.add.text(400, 200, 'Welcome to My Game', {
      fontSize: '32px',
      fill: '#fff',
      align: 'center',
    }).setOrigin(0.5);

    // Add the "Start Game" button and its click event
    const startButton = this.add.text(400, 400, 'Start Game', {
      fontSize: '24px',
      fill: '#00f',
    }).setOrigin(0.5).setInteractive();

    startButton.on('pointerdown', () => {
      this.scene.start('MainGame'); // Replace 'MainGame' with your game scene key
    });
  }
}

export default TitleScreen;

