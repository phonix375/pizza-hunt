const {Schema, model} = require('mongoose');

const PizzaSchmena = new Schema({

    pizzaName: {
        type: String
    },
    createdBy: {
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    size:{
        type:String,
        default:'Large'
    },
    toppings:[]
})

//create the pizza model using the pizza schema 
const Pizza = model('Pizza', PizzaSchmena);

//export the Pizza model
module.exports = Pizza;
