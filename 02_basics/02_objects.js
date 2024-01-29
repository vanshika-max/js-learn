//singleton and
// literal
const mysym=Symbol("key1")
const user={
    name:"hitesh",
    [mysym]:"mykey1",//way to represent the key
    age: 18,
    location:"jaipur",
    email:"hitesh@google.com",
    isloggedin:false,
    lastlogindays:["monday","thursday"]
}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mysym]);
//to change the elemnts of objects
user.name="vanshu"
// console.log((user["name"]));
// to freeze the object means we cant change the  elemnts of objects 
//Object.freeze(user)
// console.log(user);


user.greeting=function () {
    console.log("hello user");
}
user.greetingtwo=function(){
    console.log(`hlo user,${this.name}`);
}
// console.log(user.greeting);
// console.log(user.greeting());
// console.log(user.greetingtwo());



//objects part 2
//const tinder=new Object()//singleton 
const tinderuser={}//non singleton
tinderuser.id="123ab"
tinderuser.name="sam"
tinderuser.logged=false
const regular={
    email:"some@",
    fullname:{
        userfullname:{
          firstname:"vanshu",
          lastname:"parja"
        }
    }
}
console.log(regular.fullname.userfullname.lastname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",4:"b"
}
//to merge two objects

//const  obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('logged'));
