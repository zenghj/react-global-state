import React, { Component } from 'react';
import GlobalContext from './GlobalContext';

export default WrappedComponent => {
  class WithGlobalState extends Component {
    static displayName = `WithGlobalState(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    }`
    render() {
      return (
        <GlobalContext.Consumer>
          {({ globalState, setGlobalState }) => (
            <WrappedComponent
              {...this.props}
              globalState={globalState}
              setGlobalState={setGlobalState}
            />
          )}
        </GlobalContext.Consumer>
      );
    }
  }

  return WithGlobalState;
};
