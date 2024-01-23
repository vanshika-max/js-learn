//singleton and
// literal
const mysym=Symbol("key1")
const user={
    name:"hitesh",
    [mysym]:"mykey1",
    age: 18,
    location:"jaipur",
    email:"hitesh@google.com",
    isloggedin:false,
    lastlogindays:["monday","thursday"]
}
console.log(user.email);
console.log(user["email"]);
console.log(user[mysym]);
O


