enum Direction {
  Up = 'Up',
  Down = 'Down',
  Rigth = 'Rigth',
  Left = 'Left',
}

function sayMyName(diraction: Direction) {
    if(diraction === 'Up'){
        return 'salom dunyo'
    }
}

console.log(sayMyName(Direction.Up))