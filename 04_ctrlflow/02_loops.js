// let array=[1,2,3,4]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(array[index]);
    
// }
//break and continue==skip
//while
//  let i=0
// while (i<5) {
//     console.log(`${i}`);
//     i++;
// }
// let score=1;
// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score<5);
//for of loop
// const arr=[1,2,3,5,4]
// for (const i of arr) {
//     console.log(i);
// }
// const greet="hello world"
// for (const i of greet) {
//     console.log(`${i}`);
// }
// //maps
// const map=new Map()
// map.set('IN',"INdia")
// map.set('USA',"united")
// console.log(map);
// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }
// const myobj={
//     js:'javascript',
//     cpp:'c++'
// }
// for (const key in myobj) {
//     console.log(key);
//     console.log(myobj[key]);
// }
const coding=["js","cpp","c"]
// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// const mycoding=[
//     {
//         langname:"vanshu",
//         filename:"java"
//     },
//     {
//         langname:"ashish",
//         filename:"c++"
//     }
// ]
// mycoding.forEach((item)=>{
//     console.log(item.langname);
// })
// const code=["js","c++","ruby","swift"]
// const values=code.forEach((item)=>{
//       console.log(item);
// })
// console.log(values);
//filter
const mynums=[1,2,3,4,6,5,8]
// const newnums=mynums.filter((num)=>num>4)
const newnums=[]
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums);
