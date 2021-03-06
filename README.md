# react-global-state

If you want to use global state in react application, but you do not want to introduce complex library like [redux](https://redux.js.org/) (for example when you just want to store the some global user info or some basic config info), then this is your choice. But if your global state is complex enough, you'd better choose [redux](https://redux.js.org/) or something else.

## API

### Provider
Use `<Provider>` to wrap your app component with prop `globalState` as the inital globalState

### withGlobalState
Wrap you component with HOC `withGlobalState`, then in the wrapped component, you can get the globalState with `this.props.globalState` and `this.props.setGlobalState` which is use to update the globalState. The signature of `this.props.setGlobalState` is same as `this.setState`.

## Usage
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-global-state';

const initState = {
  login: false
}

ReactDOM.render(<Provider globalState={initState}><App /></Provider>, 
  document.getElementById('root'));
```

```js
// App.js

import React, { Component } from 'react';
import './App.css';
import { withGlobalState } from 'react-global-state';

class App extends Component {
  increment = () => {
    this.props.setGlobalState(prevState => {
      return {
        count: prevState.count ? prevState.count + 1 : 1
      };
    });
  };
  componentWillMount() {
    console.log('componentWillMount', Date.now());
    this.increment();
  }
  render() {
    const { globalState } = this.props;
    return (
      <div className="App">
        <div className="App-intro">
          init global state: {JSON.stringify(globalState)}
          <br />
          <button onClick={this.increment}>
            click to increment global count
          </button>
        </div>
      </div>
    );
  }
}

export default withGlobalState(App);

```

## support 
We build this based on new version [Context Api](https://reactjs.org/docs/context.html).Thus support react v16.x.