// create empty object
// var x= new Object();
// var y= {};
// console.log(x);
// console.log(y);


// var pizza ={
//     crust:'thin',
//     toppings:3,
//     hasBacon:true,
//     howmanyTOppings:function(){
//         return this.toppings;

//     }
// };
// // add the object 
// pizza.price='10$';
// // console.log(pizza.howmanyTOppings());

// // deleting object data
// // delete(pizza.crust);

// // console.log(pizza);


// object to object accessing data


var pizza =function(){
   this. crust='thin';
   this. toppings=3;
   this. hasBacon=true;
  

    
};
var pizzaA =new pizza();
var pizzaB =new pizza();
pizzaA.crust="pan";
// console.log(pizzaA.crust);

// console.log(pizzaB instanceof pizza);
console.log(pizzaB.constructor);



var pizza =function(){
    var crust ='thin';
    // this.hasBacon=true;
    var toppings=3;
// this.getHasBacon=function(){
//     return this.hasBacon;
// };
// this.getcrust= function(){
//     return crust;
// };

var getToppings =function(){
    return toppings;
};
var tmp={}
tmp.getToppings=getToppings;
return tmp;

};
var pizzaA = new pizza();
console.log(pizzaA.getToppings());
// console.log(pizzaA.getHasBacon());
// console.log(pizzaA.getcrust());

