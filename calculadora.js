'use strict'
//Para ejecutar en consola se usa el comando node <script.js>
var args = process.argv.slice(2);

var operation = args[1];
var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[2]);
var result = "\n Introduce bien los parámetros \n";
if(args.length == 3){
  switch (operation) {
    case "mas":
        result = "Suma: "+parseFloat(num1 + num2);
      break;
    case "menos":
        result = "Resta: "+parseFloat(num1 - num2);
      break;
    case "por":
        result = "Multiplica: "+parseFloat(num1 * num2);
      break;
    case "entre":
        result = "División: "+parseFloat(num1 / num2);
      break;
    default: result;
  }
}

console.log(result);