import React, { Component } from 'react'
import  { connect } from 'react-redux'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span>
            <span>{ this.props.a }</span>
            <button onClick={ this.props.updateA }>Update A</button>
          </div>
        </div>
        <div className="col">
          <div>
            <span>B:</span>
            <span>{ this.props.b }</span>
            <button onClick={ this.props.updateB }>Update B</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = store => {
  return {
    a: store.a,
    b: store.b
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    updateA: () => dispatch({ type: 'UPDATE_A'} ),
    updateB: () => dispatch({ type: 'UPDATE_B' })
  }
}

export default ( mapStoreToProps, mapDispatchToProps )( App );
