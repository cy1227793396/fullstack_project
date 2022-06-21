const booklist = [{
        id: '001',
        name: 'book1',
        price: 11
    },
    {
        id: '002',
        name: 'book2',
        price: 22
    },
    {
        id: '003',
        name: 'book3',
        price: 33
    }
];

function sum() {
    let moneysum = 0;
    for (let i = 0; i < booklist.length; i++)
        moneysum += booklist[i].price;
    console.log('共计' + moneysum);
}
sum();