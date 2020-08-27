//? LET AND CONST

//* let and const declare variables. Everytime that they are declared inside curly brackets, let and const create a new scope. Before ES6, this was possible only inside functions.

//* in addition, const can declare a variable that cannot be modified. If the variable you declare is an object though, you can change its properties, but you cannot make it an array or a number or something else, it has to remain an object.

const player = {
	propertyOne: 'first',
	propertyTwo: 'second',
	propertyThree: 3,
};

//? Destructuring

//* take the object example above. If you needed to save its properties in variables, efore ES6 you needed to do this

let propertyOne = (player.propertyOne = 'first');
let propertyTwo = (player.propertyTwo = 'second');
let propertyThree = (player.propertyThree = 3);

//* now with destructuring you can just:

let { propertyOne, propertyTwo, propertyThree } = player;

//* with this we basically extracted the 3 properties from the player object, and put them in 3 variables, named like them.

//? Object properties

//* Instead of just declaring them and having them fixed, with ES6 you can even use variables as property names

const name = 'Lulu';

const player = {
	[name]: 'Some name',
	['ray' + 'smith']: 'hi hi',
};

//* If you use a string or a variable as a property name, you need to sue square brackets.

//* Alternatively, you can declare an object like this

const a = 'something something';
const b = 3;
const c = {};

const obj = {
	a,
	b,
	c,
};

//* We don't need  to say a:a, b:b, c:c. Also, if the last property has a period, with ES6 it doesn't return an error!

//? Template strings

const greeting =
	'Hello ' + name + 'you seem to be doing ' + mood + ", you're great";

//* with template strings is much easier

const greetings = `Hello ${name}, you seem to be doing ${mood}`;

//? Default arguments

function greet(name = 'johann', mood = 'fine') {
	return `Hello ${name}, you seem to be doing ${mood}`;
}

//* You can pass default arguments to a function, which is going to get called with said arguments if it gets called without specified arguments.

//? Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//* sym2 === sym3 returns false. Symbols create unique types, so you can use them in variables and not risk of having the same values accidentally.

//? Arrow functions

const add = (a, b) => a + b;

const multiply = (a, b) => {
	return a * b;
};

//* this is a new way of declaring functions. In addition, these functions come with their own scope, so when you actually use THIS in this function, it doesn't return the scope it was in, but the global scope. Or something like that.
