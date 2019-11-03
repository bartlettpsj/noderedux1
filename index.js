const redux = require('redux');
const createStore = redux.createStore;

// reducers
const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }

  // actions
  const increment = () => {
    return {
      type: "INCREMENT"
    }
  }
  const decrement = () => {
    return {
      type: "DECREMENT"
    }
  }

  // store
  let store = createStore(counter);

  // Listen to changes
  store.subscribe(() => console.log(store.getState()));

  // Dispatch actions
  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(decrement());
