const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is completed');
        resolve();
    },1000)
})
promiseone.then(function(){
    console.log("async is consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async tasak 2")
        resolve();
    },1000)
}).then(function(){
    console.log("async consumed");
})

const promisethree=new Promise(function(resolve,reject){
          setTimeout(function(){
            resolve({username:"chai",email:"chai@exm"});
          }, 1000);
})
promisethree.then(function(user){
    console.log(user);
})
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"vanshu",password:"123"})
        }
        else{
            reject('error,something went wrong')
        }
    },1000)
})
promisefour
.then((user)=>{
       console.log(user);
       return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rehected"))

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"js",password:"1253"})
        }
        else{
            reject('error,js went wrong')
        }
    },1000)
});
async function consumePromisefive(){
    try{

        const response=await promisefive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
// consumePromisefive();

// async function getallusers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
//     }
// }
// getallusers();
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))