//control flow if
// const userloggedin=true
// const temp=41

// if(temp<50){
//    console.log("less than 50");  
// }

//short hand notatiom
const bal=10000
// if(bal<500000) console.log("test")
// const userloggedin=true
// const debitcard=true
// if(userloggedin && debitcard){
//     console.log("allow");
// }
//switch
const month=3
// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     default:
//         console.log("default case match");
//         break;
// }
const email="vanshu"
if(email){
    console.log("got");
}
else{
    console.log("dont");
}
//falsy value
// false,0,-0,BigInt 0n,null,undefined,nan
//truthy value
//"0","false"," ",[],{},function(){}
//nullish coalesing operator(??):null undefined
let val1;
val1=5??10
val1=null??10
console.log(val1);
//ternary operator
