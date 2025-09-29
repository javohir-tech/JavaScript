// import {dafault as Bye , sayHi as Hi} from './main.js';

let { sayBye, sayHi } = await import("./main.js");

sayHi("Javohir")
sayBye("Javohir")