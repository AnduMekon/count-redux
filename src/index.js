import React from 'react';
import ReactDOM from 'react-dom'
import Counter from './Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const intialState = {
  count:42 
}
function reducer(state = intialState, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return {
        count: state.count +1 
      }
    case 'DECREMENT':
      return {
        count:state.count -1
      }
    case 'REST':
      return {
        count:0
      }
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({type : 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'REST'});

const App = () => (
  <Provider store = {store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));





