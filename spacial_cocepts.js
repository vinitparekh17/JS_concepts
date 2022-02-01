// defining a veriable with deferent scopes, Global a is 2 and inside the function it will be 5
const a = 2

function example() {
    const a = 5;
    console.log(a);
}

console.log(a);
example();