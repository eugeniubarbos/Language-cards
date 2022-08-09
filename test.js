/** @format */

let person = {
	name: "Mike",
	age: 25,
	address: { city: "New York", zipCode: 110077 },
};

// console.log(person.address.city)

const { address: { city} } = person;
console.log(city)