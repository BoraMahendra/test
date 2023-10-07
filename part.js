let arr = [2,3,4,5]

arr.forEach(function(element,index,arr){
    console.log(index, element ,arr);
})


arr.forEach((element , index , arr) => {
  console.log("arrow", index , element,arr)
})


const heros = ["allu","ritikraj","dhurvaraj","doga"]


heros.forEach((el) =>{console.log(el.toUpperCase())})


//using map 

arr.map((element,index,arr) => {
    console.log(element,index,arr);
})

heros.map((h) =>console.log(h.toUpperCase()))



//filter

console.log(heros);

const herosWithraj = heros.filter((h) =>{
    return h.endsWith('raj')
})
console.log(herosWithraj);



//shopping cart

const cartBill = [20, 50 ,40]

const sumOfcartBill = cartBill.reduce((prev , curr) => prev*curr);
console.log(sumOfcartBill);


const billbook =[ 30,40,50,60]

const addition = billbook.reduce((prev,curr) =>prev+curr)

console.log(addition);

const crickter =["rohitcaptain","hardik vice-captain","Boom bowling"]

crickter.forEach((el) =>{console.log(el.toUpperCase())})

const crickterwithcaptain = crickter.filter((h)=>{
    return h.endsWith("captain");
}
)
console.log(crickterwithcaptain)