var service = {
	add: add,
	minus: minus,
	divide: divide,
	multiply: multiply,
	PI_VALUE: 3.14
};

module.exports = service;

////////////////////

function add(num1, num2) {
	return num1 + num2;
}

function minus(num1, num2) {
	return num1 - num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}
