// function greet() {
//     console.log("H");
//     console.log("i");
// }
// // greet()
// // function addnum(number1,number2){
// //     console.log(number1+number2);
// // }
// function addnum(number1,number2){
//          let result=number1+number2
//          return result
//  }

// const result=addnum(3,4)
// console.log(result);
// function loginuser(username){
//     if(username===undefined){
//        console.log("please enter a username");
//        return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginuser())
//functions and objects
function calculate(val1,...num1){//rest operator
       return num1
}
console.log(calculate(2,4,5,6));
const user={
    username:"vanshu",
    price:199
}
function handle(anyobject){
    console.log(`username is ${anyobject.username}`);
}
handle(user)
const myarray=[200,400,100]
function returnsecondvalue(getarray){
    return getarray[1];
}
console.log(returnsecondvalue(myarray));