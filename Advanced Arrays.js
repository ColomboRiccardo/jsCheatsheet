//? forEach

const numbers = [1, 2, 3, 4];

const douvle = [];

const newArray = numbers.forEach(value => {
	double.push(value * 2);
});

//* forEach goes through all the elements of an array, passing them one by one to a function you declare. The problem with this method is that it doesn't have to return. forEach just goes through all the elements in an array and does something, but that's it. This thing about being able to not return something, makes it not recommended over map.

//? map

const mapArray = numbers.map(value => {
	return num * 2;
});

//* map goes through the values of an array (numbers), does an operation and returns the values in another array (mapArray) that you declare. Because of this, map has to return a value, while forEach doesn't.

//! On this particular point: we want to use map instead of forEach because map is a pure function. A pure function is defined by a function with only one input, doesn't have any side effects and returns a value. WIthout a return, map returns undefined, therefore we know something is wrong. With forEach, not only our function can do something else completely different (console.log, push, etc.), but also it doesn't have to return. Having only pure functions in your code makes for predictable, readable code without any weird stuff.
