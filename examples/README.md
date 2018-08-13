# create-react-app-customization
This template was initiated by [facebook/create-react-app](https://github.com/facebook/create-react-app)

For custom requirement, we execute `yarn eject`. Then we add custom config in `/customConfig`, and we try not to modify the initial config files directly.

The main purpose to customize is enable the ability of maintain many cms apps in one git project, so we don't need to initialize app everytime we hava a new cms requirement. And the common code pieces can be shared easier.

## create a new app module
To create a new app module, you can execute `yarn run newApp`. 

Then execute `yarn run start` or `yarn run start app=${newAppName}`input some necessary information according to the command line tips. 
We will generate a config file, and you can modify it later if you need to. For most time, you don't need to do that.