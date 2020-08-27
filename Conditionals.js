//* So we have the if statement and the if...else statement, now we introduce the ternary operator and the switch case operator.

var variable = condition ? 'value if true' : 'value if false';

// this is the same as

if (condition) {
	variable = 'value if true';
} else {
	variable = 'value if false';
}

//* there is also the switch-case statement

switch (condition) {
	case firstCase:
		variable = 'this is the first case';
		break;
	case secondCase:
		variable = 'this is the second case';
		break;
	case thirdCase:
		variable = 'this is the third case';
		break;
	default:
		variable = 'this is the default case';
}

//* if condition = firstCase then variable = 'this is the first case'
