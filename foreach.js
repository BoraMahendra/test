const arr = [10,5,56];

const sumofbills= arr.reduce((prev,curr) =>prev*curr);

console.log(sumofbills);



let arr1 = [2,3,4]

arr1.forEach(function(element,index,arr1){
    console.log(index,element,arr1)
})

arr1.forEach((element,index,arr1) =>{
    console.log("arrow",element,arr1,index)

})


const heros = ["naagraj","doga","dhruva","maniraj"]

heros.forEach((el)=>{console.log(el.toUpperCase())})


arr1.map(function (element,index,arr1){
    console.log(element,index,arr1)
})

heros.map((h)=> console.log(h.toUpperCase()))


// filteration

console.log(heros);

const herowithRaj =heros.filter((h) =>{
   return h.endsWith('raj')
})

console.log(herowithRaj);


// shopping cart

const CartBill = [20,30,50]

const  SumOfCartBill = CartBill.reduce((prev,curr) => prev+curr, 0)

console.log(SumOfCartBill);

const Gamescore = [200,100,310,300,250,150]


// check if all values are numbers

console.log(typeof Gamescore[1]);

const gameScoreCheck =Gamescore.every((v)=>typeof v ==='number') //put the number in strings

console.log("check : ",gameScoreCheck);


//find score abvoe 200 

const abvoe200 = Gamescore.find((score)=>score > 200)

console.log(abvoe200);


//findIndex 

const arr3 = [5,12,4,130,45];

const IslargeNum = (element) => element >13;

console.log(arr3.findIndex(IslargeNum));
//some

const arr5 = [1,2,3,4,5];

const even =(element) => element%2===0;

console.log(arr5.some(even));
//Sort

