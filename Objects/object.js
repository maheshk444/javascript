// create empty object
// var x= new Object();
// var y= {};
// console.log(x);
// console.log(y);


var pizza ={
    crust:'thin',
    toppings:3,
    hasBacon:true,
    howmanyTOppings:function(){
        return this.toppings;

    }
};
// add the object 
pizza.price='10$';
// console.log(pizza.howmanyTOppings());

// deleting object data
delete(pizza.crust);

console.log(pizza);


// object to object 