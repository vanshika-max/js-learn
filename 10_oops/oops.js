// const user={
//     username:"vanshu",
//     logincount:8,
//     getUserdetails:function(){
//         console.log(`username:${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserdetails());
function user(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this;//jarurat ni h return krne ki 
}
const userone=new user("vanshu",12,true)
//overwrite of values that why we use new keyword
const usertwo=new user("hittu",5,false)
//using new will not overwrite
console.log(userone.constructor);
// console.log(usertwo);
//new-empty keyword or new object constructor fucnion call due to new keyword

