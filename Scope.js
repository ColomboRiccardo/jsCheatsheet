function aa() {
	console.log('test');
}

//* creating a function like this, adds a function .aa() to the window object, which when you start is the root scope.

window.aa();

function bb() {
	var a = 'hello';
}

//* this creates a function in the bb() object. If you call console.log(a) from the window object, it returns an error.

//! a function can access the parent's scope, but not its child scope.

var c = 'hello';
function cc() {
	console.log(c);
}

//* this actually works, because it the window object is the parent of the cc() object, therefore cc() has access to its scope.

var fun = 5;
function funFunction() {
	var fun = 'hello there';
}
function funerFunction() {
	fun = 'this changes stuff';
}

//* funFunction declares a new fun variable in its scope, so it doesn't access the one in the root scope. funerFunction instead changes the variable in the root scope, since it doesn't have a 'fun' variable in its scope. In this second case, it's a naming conflict.

//! Once you declare the same named variable in the function, you lose access to the one in the parent scope. This only works for functions though! For if(){} statements for examples, when using the keyword var to declare a variable, it gives it access to the global scope.

//! With var keyword, if statements do not create a new scope!
var a = 2;
if (true) {
	var a = 5;
	alert(a); //* 5
}
alert(a); //* 5
