const fs = require('node:fs');


//! blocking 
// console.log("start of script");

// const content=fs.readFileSync("notes.txt",'utf-8');

// console.log(content);


// console.log("end of script ");



//! Non blocking
console.log('start');

fs.readFile('notes.txt','utf-8',(err,data)=>{
 if(err){
    console.log("error in reading file");
 }
 else{
    console.log(data);
    
 }
})

console.log("end");


