"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Rigth"] = "Rigth";
    Direction["Left"] = "Left";
})(Direction || (Direction = {}));
function sayMyName(diraction) {
    if (diraction === 'Up') {
        return 'salom dunyo';
    }
}
console.log(sayMyName(Direction.Up));
