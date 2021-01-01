// default data / state for the game - gets mutated a lot
const data = {
  ball: {
    x: 20,
    y: 200,
    dx: 5,
    dy: 5,
    rad: 10,
    speed: 5,
  },
  brick: {
    x: 0.5,
    y: 50,
    width: 800 / 10 - 1,
    height: 20,
    density: 2,
    colors: ['blue', 'lightblue'],
  },
  player: {
    // name: 'User',
    lives: 5,
    score: 0,
    level: 1,
  },
  paddle: {
    height: 20,
    width: 100,
    x: 30,
    y: 10,
    color: '#FF4500',
  },
};

export function resetData() {
  data.player.lives = 5;
  data.player.score = 0;
  data.player.level = 1;

  data.brick.x = 0.5;
  data.brick.y = 50;
}

export default data;
