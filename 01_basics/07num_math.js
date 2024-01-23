const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);
console.log(balance.toString());//typeof will be string
console.log(balance.toString().length)
console.log(balance.toFixed(2));
const num=23.7353
console.log(num.toPrecision(3));
const hundreds=1000000
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));//for indian
///******************maths*********8 */
console.log(Math);//refere on browser
console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.floor(4.2));
console.log(Math.ceil(4.6));
//for more refer browser
console.log(Math.min(2,3,5,7));
//same for max
console.log(Math.random());//0-1
console.log(Math.random()*10);
console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)