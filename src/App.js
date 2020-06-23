import React from 'react';

import './App.css';

function App() {
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
  );
}

const mapStoreToProps = store => {
  return {
    a: store.a,
    b: store.b
  }
}

const mapDispatchToProps = () => {
  return {
    updateA: () => dispatch({ type: 'UPDATE_A'} ),
    updateB: () => dispatch({ type: 'UPDATE_B' })
  }
}

export default App;
