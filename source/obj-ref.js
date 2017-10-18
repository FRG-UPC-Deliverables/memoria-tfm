var personA = { name: "John", age: 32 };
console.log(personA.name); // Prints John
var personB = personA;
personB.name = "Anna";
console.log(personB.name) // Prints Anna
console.log(personA.name) // Prints Anna too!
