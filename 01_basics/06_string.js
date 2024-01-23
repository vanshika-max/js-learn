 const name="hitesh"
 const repocount=50
//  console.log(name+repocount+"value");
//*******instead of that we use this format */
 console.log(`hello my name is ${name} and my repocount is ${repocount}`);
 const gamename=new String('vanshu-a')
console.log(gamename[0]);
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2));
console.log(gamename.indexOf('v'));


const newstring=gamename.substring(0,4)
console.log(newstring);//slicing

const anotherstring=gamename.slice(-8,4)
console.log(anotherstring);//slicing

const newstring1="  vanshu "// trim exttra spaces
console.log(newstring1);
console.log(newstring1.trim());

const url="http://hitu.com/hitehs%20ch"
console.log(url.replace('%20','-'))//replace particular thing

console.log(url.includes('hitu'));

console.log(gamename.split('-'));
//go on brower for more refernece and keywords