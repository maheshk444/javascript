// // this is a global scope
// // var global ="global";
// // console.log(aa);


// (function a(){
//     var aa="aa";
//     // console.log(aa);
// })
// ();

// // is two function different but output is same


// function a(){
//     var aa="aa";
//     // console.log(aa);
// }
// a();


var global ="global";
function a(){
    // global="overriding global";

    // console.log('function a()::'+global);

    var global="redefining global";


}
a();

console.log('from after function a() execution:'+global);