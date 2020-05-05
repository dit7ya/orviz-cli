const configWizard = require("./inquirer");
const fs = require("fs");

// if config.json does not exist run the configuration wizard and change the variables

// configWizard.configWizard();


// else just run the server
const {exec} = require("child_process");
exec('http-server . -p 3000').unref();
