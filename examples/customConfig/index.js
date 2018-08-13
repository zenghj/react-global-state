const path = require('path');
const appConfig = require(path.resolve(__dirname, `./generated/${process.env.APP_NAME}.config.json`));

module.exports = {
  htmlTitleField: appConfig.title,
}