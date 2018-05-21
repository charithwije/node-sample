var person = {
	name: 'subas',
	age: '29',
	getDetails() {
		console.log(arguments);
		return this.name + ' ' + this.age;
	},
	getDetailsTwo: ()=> {
		console.log(arguments);
		return this.name + ' ' + this.age;
	}
}

 console.log(person.getDetailsTwo(1,2,3,4));