interface Person {
	name: string;
	lastName: string;
	age: number;
	email: string;
	phoneNumber: number;
}

interface PersonInfo extends Person {
	country?: string;
	greeting?(name: string): string;
}

const person: Person = {
	name: "Person",
	lastName: "last name",
	age: 45,
	email: "test@gmail.com",
	phoneNumber: 359888767676
};

const person2: PersonInfo = {
	name: "nameTwo",
	lastName: "lastNameTwo",
	age: 55,
	email: "emailTwo@gmail.com",
	phoneNumber: 359888777333,
	country: "Bulgaria",
	greeting: (name) => {
		return `Hello, ${name}!`
	}
}

console.log(person);
console.log(person2);
console.log(person2.greeting?.(person2.name));
