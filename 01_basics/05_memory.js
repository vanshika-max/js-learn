//stack(primitve)strings,number,boolean,bigint,symbol,undefined,null,****heap(non)array,object,function
let myname="vanshu"
let anothername=myname
anothername="ashish"
// console.log(anothername)
// console.log(myname);
//not change beacuse of stack
let user={
    email:"vanshu@.com",
    upi:"haudh"
}
let usertwo=user
usertwo.email="ashish@.com"
console.log(user.email);
console.log(usertwo.email);
//value change bcz of heap