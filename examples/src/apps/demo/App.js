import React, { Component } from 'react';
import './App.css';
import { withGlobalState } from '../../lib/react-global-state/index';

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
          init global state: {JSON.stringify(globalState, 4)}
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
