// console.log('Hello Node!');
// captures whatever is typed into command line . space between creates a new line in command line
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// slice into two parts at the point of process.arg.length
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];


// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };

// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage())
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));

// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };

// console.log(generatePage('Jane', 'janehub'));
// console.log(generatePage(name, github));
// console.log(name, github);

// load file system fs.close() fs.open() fs.readFile() fs.writeFile()
// const fs = require('fs');
// const http = require('http')
// const url=require('url')

const fs = require('fs');
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

// const textMessage = fs.readFile('./mesasge.txt','utf8',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });
// running node index.js should now read text in ./message.txt

// const add = (a,b) =>a + b;
// const multiply = (a,b) =>a*b;

// module.exports={
//     add:add,
//     multiply:multiply,
// }
// use const math = require("./math");  to load a js file with the above. use the below console log in main js to load math
// console.log(math.add(2,3));