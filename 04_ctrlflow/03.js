// const mynum=[1,2,3,4,5]
// // const newnums=mynum.map((num)=>num+10)

// const newnums=mynum
//                .map((num)=>num*10)
//                .map((num)=>num+1)
//                .filter((num)=>num>=40)
// console.log(newnums);
//reduce

const mynum=[1,2,3]
 const mytotal=mynum.reduce(function(acc,currval){
    console.log(`${acc} and ${currval}`);
    return acc+currval
 },0)
 console.log(mytotal);
 