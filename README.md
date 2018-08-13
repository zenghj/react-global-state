# react-global-state

If you want to use global state in react application, but you do not want to introduce library like `redux`, then this is your choice.

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
