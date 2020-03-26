import React from 'react';
import {connect} from 'react-redux'
import './App.css';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT'})
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT'})
  }
  handleRest = () => {
    this.props.dispatch({type: 'REST'})
  }
  render() {
    return (
      <div className="App-header">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.handleRest}>Rest</button>
          
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  count: state.count,
 

})

export default connect(mapStateToProps) (Counter);


