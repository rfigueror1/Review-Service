import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <p>this working?</p>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));