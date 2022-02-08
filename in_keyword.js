//Usage of "in" keyword, it will check the if variable has a particuler property or not?

const person = {
    name: "Vinit",
    age: "18"
}

if (person.name) {
    console.log("Person has a name!");
}
if ("name" in person) {
    console.log('Person variable has a property called "Name".');
}