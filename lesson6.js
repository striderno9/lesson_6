function printSentence(string) {
	return console.log(string);
}

printSentence("hello I need some water");
printSentence("hello I need some sleep");

function printSomething() {
	return console.log("bananas");
}

printSomething();
printSomething();

function playGame(doorNumber) {
if (doorNumber === 1) {
	return alert("polar seltzer");
} else if (doorNumber === 2) {
	return alert("a new car");
} else (doorNumber === 3)

}


function greetMe(name) {
return alert("hello " + name);
} 

greetMe("smalltalk");
greetMe("judy");



function addTwoNumbers(x,y) {
return x + y;	
}

var result = addTwoNumbers(5, 6);

console.log(result);             //same
console.log(addTwoNumbers(5,6)); //same



var door = 2;

if (door ===1) {
alert("tiger");
} else if (door ===2) {
alert("polar seltzer");
} else if (door ===3) {
alert("brand new car");
} else {
alert("what are you doing?");
}


console.log("hello world");
alert("hello world");


document.getElementById("result").innerHTML = "hello world";


// datatypes:
// strings -> words
// numbers -> 0, 1.5 -2039
// booleans true or false
// undefined
// array -> [ , , ]
// object -> { , , }

var fruit = "banana";

var fruits = ["banana", "apple", "watermelon"];
console.log(fruits[2]);

var fruit = {
	name: "banana",
	color: "yellow"
}

console.log(fruit.color);
console.log(fruit["color"]);

var age = 23;

if (age >= 21) {
	alert("welcome!");
} else {
	alert("go to welche's grape jusice site instead");
}

var johnny = 11;

if (johnny > 10) {
	alert("Johnny is " + johnny + " and that is greater than ten!");
} else {
	alert("Johnny is less than ten!");
}

var jason = "student";

if (jason === "human") {
	alert("Jason is a student!");
} else {
	alert("Jason is not just a student, he's a human");
}

var x = 25;

if (x <= 55) {
	alert("25 is tiny");

} else {
	alert("25 is huge");
}


