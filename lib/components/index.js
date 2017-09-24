import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 4,
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount(){
    this.setState({
      answer: await this.asyncFunc()
    });
  } 
  render() {
    return (
      <h2>Hello Class Component -- {this.state.answer}</h2>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);