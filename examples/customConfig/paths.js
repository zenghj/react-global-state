const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log(resolveApp(`src/apps/${process.env.APP_NAME}/index.js`))
module.exports = {
  appIndexJs: resolveApp(`src/apps/${process.env.APP_NAME}/index.js`),
  appConfigFile: resolveApp(`customConfig/generated/${process.env.APP_NAME}.config.json`),
}

