const inquirer = require('inquirer');
const fs = require('fs');

//  TODO run this script only when config.json does not exist

let configWizard = function configWizard () {

  console.log("Hello, welcome to the Orviz configuration wizard.");

  let questions = [
    {
      type: 'input',
      name: 'orgRoamDirectory',
      message: 'Please enter the full location of your org-roam directory: '
    },

    {
      type: 'input',
      name: 'orvizDirectory',
      message: 'Great! Now enter the full location of your Orviz directory (should be somewhere outside your org-roam directory): '
    }

  ];


  inquirer
    .prompt(questions)
    .then(answers => {
      // console.log(answers);
      // store the configs in a JSON file
      fs.writeFile( answers.orvizDirectory + "config.json", JSON.stringify(answers), err => {if (err) throw err;});
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });

};

module.exports.configWizard = configWizard;
