const fs = require('node:fs');


// const content=fs.readFileSync('../01nodeStarting/01.txt','utf-8');
const content=fs.readFileSync('notes.txt','utf-8');

// console.log(content);

 fs.writeFileSync('notes1.txt','my first file created successful', 'utf-8');// it always over rite the file 

 fs.appendFileSync('notes1.txt','\nnow i am able to add the next line ','utf-8')// it add the next contain  not overrite

 const mkdir1=fs.mkdirSync('game/pubg',{recursive:true})
  const mkdir2=fs.mkdirSync('game2/pubg2',{recursive:true})


fs.rmdirSync('game/pubg');// remove only the pubg from game folder

 
 


 



