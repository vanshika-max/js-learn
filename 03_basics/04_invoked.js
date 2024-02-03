//immediately invoked function expression
(function chai(){
   console.log(`db connected`);
})();
//this semicolon is must beccause to end the function
//to invoke arrow funciton below
(()=>{
    console.log(`db coonect`);
}
)();
//to pass the values
((name)=>{
    console.log(`db coonect ${name}`);
}
)("vanshu");

