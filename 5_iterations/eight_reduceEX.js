const mycart = [
    {
        "itemName":"sugar",
        "itemPrice":50
    },
    {
        "itemName":"Tea",
        "itemPrice":80
    },
    {
        "itemName":"Soap",
        "itemPrice":78
    },
    {
        "itemName":"paneer",
        "itemPrice":100
    },
    {
        "itemName":"milk",
        "itemPrice":70
    },
    {
        "itemName":"biscuit",
        "itemPrice":10
    },

]


const TotalPrice = mycart.reduce( (acc,item)=> (acc + item.itemPrice),0)

console.log(TotalPrice);
