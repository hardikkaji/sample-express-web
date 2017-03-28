var operations = require('./operations');

console.log('sum of 2 number is - ', operations.add(10, 20));
console.log('divide of 2 number is - ', operations.divide(10, 20));
console.log('minus of 2 number is - ', operations.minus(10, 20));
console.log('multiply of 2 number is - ', operations.multiply(10, 20));
console.log('PI - ', operations.PI_VALUE);

// objectname.keyName
var employee = {
	firstName: 'Hardik',
	lastName: 'Kaji',
	doj: '1-Nov-2016'
};

console.log('Name', employee.firstName);

// String array
var names = ["Shorya", "Hardik", "Amiras"];

var employees = [
	{
		firstName: 'Amiras',
		lastName: 'Modi',
		doj: '1-Nov-2018'
	},
	{
		firstName: 'Mukesh',
		lastName: 'Modi',
		doj: '22-Jul-2015'
	}
];

employees.unshift(employee);

employees.pop();
employees.shift();

// console.log(employees);


console.log('First Name \t Last Name \tDate Of Joining');
console.log('-----------------------------------------------');
// for(var i=0; i < employees.length; i++) {
// 	console.log(employees[i].firstName, '     \t', employees[i].lastName, '      \t', employees[i].doj);
// }

employees.forEach(function(item) {
	console.log(item.firstName, '     \t', item.lastName, '      \t', item.doj);
});
// console.log(names[2]);
