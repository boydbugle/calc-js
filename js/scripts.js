var greetings = function(whatToSAy) {alert(whatToSAy); }; //send greetings to big boi
greetings("Big boi,hello");

//collecting age,subtracting and showing results
var ageDiff = function(whatToSAy) {alert(whatToSAy); };
var subtract = function(age1,age2 ) {return age1 - age2; };
var age1 = parseInt(prompt("what is your age?"));
var age2 = parseInt(prompt("what is his age?"));
var result = subtract (age1,age2);
var ageDiff =alert (("the age difference is" + result + "."));

// can i prompt age1&age2 combined?
// can i combine two math models in one line e.g subtract then multiply

var mathResult = function(whatToSAy) {alert(whatToSAy); };
var remainder = function(people,group) {return people % group; };
var result = remainder(85,6);
var mathResult = ("the remainder is" + result + ".")

//collecting info,combining and showing results
var age = prompt("What is your age?");
var yourName = prompt("What is your name?");
var food = prompt("what is your favourite food?");
var statement = function(whatToSAy) {alert(whatToSAy); }; 
var statement = alert(("my name is"+ yourName+ "aged"+age +"and i love"+ food+"."));

//if argument is false on boolean, how do we prompt command again e.g password
 