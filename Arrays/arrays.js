// JavaScript Array length() Method
var test=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(test[2]);
console.log(test.length);
console.log(test.length+10);
console.log(test.length-5);

console.log(test.length-5);




// JavaScript Array concat() Method
function Fun() {
    var hege = ["Cecilie", "Lone"];
    var stale = ["Emil", "Tobias", "Linus"];
  return  children = hege.concat(stale); 
  }
  console.log(Fun());

// Concat example 2
function Fun1(){
  var a = ["welcome", "to"];
  var b = ["hello ", "world", "in"];
  var c= ["works"];
return d=a .concat(b,c);
}
console.log(Fun1());



  //JavaScript copywithin Method
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  function Fun2(){
    return  fruits.copyWithin(1,2);
  }
  console.log(Fun2());

  // entries
  var fruits = ["Banana", "Orange", "Apple", "Mango"];




 //JavaScript every Method
var ages = [32, 33, 16, 40];
function check(age){
  return age <=18;
}
function Fun3(){
 return ages.every(check);
}
console.log(Fun3());





//JavaScript  Array fill()Method

var fruits = ["Banana", "Orange", "Apple"];
function Fun4(){
  return fruits.fill("Mango");
}
console.log(Fun4());

// fill() example2
var fruits = ["Banana", "Orange", "Apple"];
function Fun5(){
  return fruits.fill("Mango",0,2);
}
console.log(Fun5());


//JavaScript Array filter() Method

var ages = [32, 33,12, 16, 40];
function check(age) {
  // using lessthen or greaterthen
  return age >= 18;
}
function Fun6(){
  return ages.filter(check);
}
console.log(Fun6());


// JavaScript Array find() Method
// Get the value of the first element in the array that has a value of 18 or more:
var ages = [ 12,4, 16,40, 20, 25,30];
function check(age) {
  // using lessthen or greaterthen
  return age >= 18;
}
function Fun7(){
  return ages.find(check);
}
console.log(Fun7());

// JavaScript Array findIndex() Method
// Get the index of the first element in the array that has a value of 18 or more:
var ages = [4, 12, 16, 20,30,40];
function check(age) {
  // using lessthen or greaterthen
  return age >= 25;
}
function Fun8(){
  return ages.findIndex(check);
}
console.log(Fun8());
 

//  JavaScript Array from() Method

var myArr= Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

console.log(myArr)


//  JavaScript Array includes() Method
// Check if the fruit array contains "Mango":
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
console.log(n);

// Check if the fruit array contains "Banana", when starting the search from position 3:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var m = fruits.includes("Banana",2);
console.log(m);

//  JavaScript Array indexof() Method
// Click the button to display the position of the element "Apple":

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

//  JavaScript Array isArray() Method
// Click the button to check if "fruits" is an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
 var x=Array.isArray(fruits);
 console.log(x);


//  JavaScript Array () Method
//Click the button to join the array elements into a string.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var y=fruits.join("and");
console.log(y);

//  JavaScript Array () Method
// The Iteration object will contain the keys of the array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruits.keys();
for(x of fk){


console.log(fk);
}












