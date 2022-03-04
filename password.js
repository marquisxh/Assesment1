const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Welcome to password validator tool", function(input){
	tokens = input.split(' '); 

