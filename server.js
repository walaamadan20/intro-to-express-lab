const express = require('express');
const app = express();



  
  
  app.get("/greetings/:username", (req,res) =>{
    res.send(`Hello there, ${req.params.username}!`)
})

app.get("/roll/:number", (req,res) =>{
const rolledNumber = parseInt(req.params.number)
if(rolledNumber != NaN && rolledNumber >= 0){
    res.send(`you rolled ${rolledNumber}`)
}else{
    res.send("you must specify a valid number")
}

})

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get("/collectibles/:itemIndex", (req,res) => {
    const storeItem = collectibles[req.params.itemIndex]
    if(storeItem != undefined){
       res.send(`So, you want the ${collectibles[req.params.itemIndex].name} For ${collectibles[req.params.itemIndex].price}, it can be yours!” `) 
    }else{
        res.send("This item is not yet in stock. Check back soon!")
    }

})

app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get("/shoes", (req, res) => {
    let filteredShoes = shoes;

    if (req.query.min_price) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseInt(req.query.min_price));
    }

    if (req.query.max_price) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseInt(req.query.max_price));
    }

    if (req.query.type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === req.query.type);
    }

    res.json(filteredShoes);
});



app.listen(3000, () => {
    console.log('Listening on port 3000');
  });