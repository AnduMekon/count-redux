import React from 'react';
import {createStore} from 'redux';
import './App.css';

function mainReducer(state = {count:0}, action) { 
  switch(action.type) {
    case 'ADD':
      return state.count +1;
    case 'SUBTRACT':
      return state.count -1; 
    default:
      return state;
  }
}

const store = createStore(mainReducer);

class App extends React.Component {
  constructor () {
    super();
  
    store.subscribe(() => {
     
      console.log(store.getState());
    });
  }

  
  handleAdd() {
   
    store.dispatch({type: 'ADD'})
  }
  handleSubtract() {
    store.dispatch({type: 'SUBTRACT'})
  }
  render () {
    return (
          <div className="App">
                <h1>Simple Counter</h1>
                <h1>Count: 0</h1>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleSubtract}>Subtract</button>

              </div>

    )

    
  }
   
  
}


