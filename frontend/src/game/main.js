import React from 'react';
import Phaser from 'phaser';
import TitleScreen from './scenes/titleScreen'; // Adjust the import path as needed

class Game extends React.Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container', // Make sure this id matches the one in render method
      scene: {
        // preload: preload,
        // create: create,
      },
    };

    this.game = new Phaser.Game(config);

    // Load and start the TitleScreen scene
    this.game.scene.add('TitleScreen', TitleScreen);
    this.game.scene.start('TitleScreen');
  }

  componentWillUnmount() {
    this.game.destroy(true);
  }

  render() {
    return <div id="game-container" />;
  }
}

export default Game;


