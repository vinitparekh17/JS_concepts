var items = [
    { name: 'Bike', price: 100 },
    { name: 'T.V', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

// map function it will return an array with performing some function with each item ( kind of looping )

var newItems = items.map(item => item.name).join("\n");

// alternative and easiest way to do same thing
newItems = items.forEach(item => console.log(item.name));