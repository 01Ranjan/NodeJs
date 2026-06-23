 // modules

 // build in module
 // 3rd party module
 // custom module( my module);


 // file module
 

 const fs=require('fs');

//  console.log(fs);

 const containnt=fs.readFileSync('01.txt','utf-8')

//  console.log(containnt);


// (function(exports, require, module, __filename, __dirname) {
//     Your actual file code lives inside here!
// });

// require('fs')---->try to find buildin module, 3rd party module if not throw error


//require('./fs')--> now it try to find the costum module


 