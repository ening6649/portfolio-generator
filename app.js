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



// start code 
const inquirer = require('inquirer')
const promptUser = ()=> {
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
    }
  ])
}
  
// promptUser().then(answers => console.log(answers));
  

const promptProject = portfolioData => {
   // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  
    
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
    });
   
   
};


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

// const fs = require('fs');
// const generatePage = require('./src/page-template')

// const pageHTML = generatePage(name, github);



// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });