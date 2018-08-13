import React, {Component} from 'react'
import GlobalContext from './GlobalContext'

class Provider extends Component {
  state = this.props.globalState

  setGlobalState = (...args) => {
    this.setState(...args)
  }
  render () {
    return <GlobalContext.Provider value={{globalState: this.state, setGlobalState: this.setGlobalState}}>
      {this.props.children}
    </GlobalContext.Provider>
  }
}

export default Provider