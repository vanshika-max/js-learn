// const myarr=[0,1,2,3,4]
// console.log(myarr[0]);
// //strings can alsoo be by " "
// const myarr2=new Array(1,2,3)
// console.log(myarr2[0]);
// //deep copy // shallow copy
// myarr.pop()
// myarr.push(6)
// console.log(myarr);
// myarr.unshift(9)
// console.log(myarr);
// myarr.shift()
// myarr.shift()
// console.log(myarr);
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(2));
// const newarr=myarr.join()//to convert array into string
// console.log(myarr);
// console.log(typeof newarr);

// //slice,splice
// console.log("a",myarr);
// const myn1=myarr.slice(1,3)
// console.log(myn1);
// console.log("b",myarr);
// //diffrenece between slice and splice
// const myn2=myarr.splice(1,3)
// console.log(myn2);
// console.log("b",myarr);

///part 2 arrys
const marvel=["thor","tron","spider"]
const heros=["superman","flash","batsman"]
// marvel.push(heros)
// console.log(marvel);//take arrray as ddata
const allheros=marvel.concat(heros)
console.log(allheros);
const allmarvel=[...marvel,...heros]//spred operator another way of concat
console.log(allmarvel);

const arr2=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr=arr2.flat(Infinity)
console.log(real_arr);

console.log(Array.isArray("hitesh"))