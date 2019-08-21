// callback functions
// let x= function(){
//     console.log("i am called from inside a function");
// };
// let y =function(callback){
//     console.log('do somthing');
//     callback();
// }
// y(x);

// calculation type inside
// let calc =function(num1,num2, calcType){
//     if(calcType == "add"){
//         return num1+num2;
//     }
//     else if (calcType == "multiply"){
//      return num1 *num2;
//     }
// };
// console.log(calc(5,10,'add'));
// console.log(calc(5,10,'multiply'));


// callback function in calculation type outside
let add =function(a,b){
    return a+b;
}
let multiply =function(a,b){
    return a*b;
}

let dowhatever= function(a,b){
    console.log(' callback ${a}, ${b}');
}
let calc =function(num1,num2 ,callback){
    if (typeof callback === "function"){
    return callback(num1,num2);
    }
}
// console.log(calc(2,3, add));

// console.log(calc(2,3, multiply));
// console.log(calc(2,3, dowhatever));
console.log(calc(2,3, function(a,b){return a-b}));
