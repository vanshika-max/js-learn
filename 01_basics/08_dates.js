 let mydate=new Date()//we can pass in the bracketby commass
//  console.log(mydate);
//  console.log(mydate.toDateString());
//  console.log(mydate.toLocaleString());//many more
//  console.log(typeof mydate);
 let mytimestamp=Date.now()
//  console.log(mytimestamp);
 let mycreateddate=new Date("01-14-2023")
//  console.log(mycreateddate.getTime());
//  console.log(Math.floor(Date.now()/1000));

let newdate=new Date()
console.log(newdate.getDate());//many more
newdate.toLocaleString('default',{
    weekday:"long"
})
console.log(newdate.getDay().toLocaleString('default',{
    weekday:"long"
}));
