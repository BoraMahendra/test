// Regualr Expression 

let pattern = 'pw'

let regexOne= new RegExp(pattern)

let flag ='gi'    //g means global //I means case insenstive search


let regextwo = new RegExp(pattern, flag)

let regexThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"


const result = regexThree.test(strToCheck)
console.log(result);


const anotherResult = strToCheck.match(regexThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regexThree,'p-w')

console.log(oneMoreResult);


const webUrl ="https:pwskills.com/karan%21mehra"
const useableurl = webUrl.replace(/%\d\d/gi,'-')

console.log(useableurl);

// in this url always the value is changed 30 , 40 ,20  then we use a new method  
// the number which ends with 0 we use \d0
//for number which have the end value 21 ,31 the use use \d\d




