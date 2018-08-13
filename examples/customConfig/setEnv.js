const path = require('path');
const fs = require('fs');
const rl = require('./utils/readline')();
const chalk = require('chalk');
const appsDir = path.resolve(__dirname, '../src/apps');
const generatedDirPath = path.resolve(__dirname, './generated');
function parseArgs(arr) {
  let parsed = {};
  let argReg = /(\S+)=(\S+)/;
  arr.forEach(arg => {
    let matched = arg.match(argReg);
    if(matched) {
      parsed[matched[1]] = matched[2] 
    } else {
      parsed[arg] = true;
    }
  });
  return parsed;
}
function walkPages() {
  const files = fs.readdirSync(appsDir);
  const pages = files && files.reduce((sum, fileName) => {
    const filePath = path.join(appsDir, fileName);
    const stats = fs.statSync(filePath);
    if(stats && stats.isDirectory()) {
      sum.push(fileName);
    }
    return sum;
  }, []);
  // console.log(pages)
  return pages;
}

const args = process.argv;
const parsedArgs = parseArgs(args);

let appName = parsedArgs.app;
process.env.parsedArgs = parsedArgs;


const promise = new Promise((resolve, reject) => {
  if(typeof appName === 'undefined') {
    const existAppNames = walkPages();
    const existAppList = existAppNames.reduce((sum, pageName, index) => {
      return sum + `${index}: ${pageName}\n`
    }, '');
    // const existAppList = existAppNames.join('\n');
    console.log(chalk.yellow("you haven't assign which app you are runing"))
    rl.rlquestion(`select your app's name, now you have these choices(enter the number below): \n${existAppList}\n`)
      .then(index => {
        if(typeof existAppNames[index] !== 'undefined') {
          appName = existAppNames[index];
          // process.env.PUBLIC_URL = `/${appName}`;
          process.env.APP_NAME = appName;
          console.log(`"${appName}" was selected`)
          generateConfigFile(appName).then(() => resolve(appName))
        } else {
          throw new Error('wrong app name')
          // process.exit();
        }
      })
  } else {
    console.log(appName);
    // process.env.PUBLIC_URL = `/${appName}`;
    process.env.APP_NAME = appName;
    generateConfigFile(appName).then(() => resolve(appName))
  }

})

function ToBeautifyJson(obj) {
  return obj && JSON.stringify(obj, null, 2);
}

async function generateConfigFile(appName) {
  const filePath = path.join(generatedDirPath, `${appName}.config.json`);
  if(!fs.existsSync(filePath)) {
    const config = {};
    console.log(chalk.yellow('This app is going to run for the first time, you have to input some info to generate a config file'))
    config.title = await rl.rlquestion('enter html <title></title> field name: ');
    config.PUBLIC_URL = await rl.rlquestion('enter "process.env.PUBLIC_URL" for webpack build: ');
    process.env.PUBLIC_UR = config.PUBLIC_URL;
    console.log(chalk.underline(`the generated config has been put at ${filePath}, you can modify it later if you need`))
    fs.writeFileSync(filePath, ToBeautifyJson(config))
  } else {
    const config = require(filePath);
    if(!config.PUBLIC_URL && !config.forceNoPublicUrl) {
      let forceNoPublicUrl = await rl.rlquestion('the "PUBLIC_URL" is empty, are you sure? yes|no: ');
      if(forceNoPublicUrl.indexOf('y') > -1) {
        config.forceNoPublicUrl = true;
      } else {
        config.PUBLIC_URL = await rl.rlquestion('enter "process.env.PUBLIC_URL" for webpack build: ');
      }
      fs.writeFileSync(filePath, ToBeautifyJson(config))
    }
    process.env.PUBLIC_URL = config.PUBLIC_URL;
  }
  rl.close();
  return true;
}


module.exports = promise;