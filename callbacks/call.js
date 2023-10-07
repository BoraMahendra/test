// function h(x, fn){
//     //h -> is a higher order function
//     //fn -> callback
//     console.log(x*x);
//     fn();
// }

// // h(10, function(){
// //     console.log("done with callback")
// // })


// h(10, exec)

// function exec(n){
//     console.log("squared value is ",n)

// }

// set timeout-
console.log("start")
setTimeout(function f(){
    console.log("time done");
},3000);

console.log("end")
for(let i=0; i<10000000; i++){}

//in this programm the time done print by using the timer of for loop not the use of set timeout 

//event loop and call bacqueue 