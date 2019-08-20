//declaration
// var name;
// assign value
// name="mahesh";

// console.log
// console.log(name);

// Lexical Scoping
//  variables defiend outside function is available in all subsequent functions

// "use strict";
// var i=1;
// // console.log(i);
// (function(){
//     console.log(i);

//     (function(){

//         console.log(i);
//        (function(){

//         console.log(i);
//         })();
//     })();
// })();


// Block Scop

"use strict";
(function(){
  let i=1;
  if(true){
       i=2;
      console.log(i);
  }
   console.log(i);
})();




