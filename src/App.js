import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="col">
        <div>
          <span>A:</span>
          {/* <span>{ this.props.a }</span> */}
          <button>Update A</button>
        </div>
      </div>
      <div className="col">
        <div>
          <span>B:</span>
          {/* <span>{ this.props.b }</span> */}
          <button>Update B</button>
        </div>
      </div>
    </div>
  );
}

const mapStoreToProps = store => {
  
}

export default App;
