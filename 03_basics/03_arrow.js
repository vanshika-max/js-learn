const user={
       username:"vanshu",
       price:999,
       welcomemessage:function(){
        console.log(`${this.username},welcome to web`);
        console.log(this);
       }
}
// user.welcomemessage()
// user.username="ashu"
// user.welcomemessage()
// console.log(this);
// function  chai() {
//     console.log(this);
// }
// chai()
// const chai=function () {
//     let userename="histesh"
//     console.log(this.userename);
// }
// const chai=()=>{
//     let username="vanshu"
//     console.log(this.username);
// }
//arrow function
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
//***implicit return */
// const addtwo=(num1,num2)=> num1+num2
//to return an object
const addtwo=(num1,num2)=>({username:"hitesh"})
console.log(addtwo(3,5))
//looop
