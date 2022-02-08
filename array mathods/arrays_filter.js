var items = [
    {name: 'Bike',  price: 100},
    { name: 'T.V', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

// Filter an items which has higher price then 100

var newItems = items.filter(item => item.price <= 100);
console.log(newItems);