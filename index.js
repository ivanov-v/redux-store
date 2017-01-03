function reducer(state = { count: 0 }, action) {
  if (action.type === 'INCREMENT') {
    return { count: state.count + action.amount }
  } else if (action.type === 'DECREMENT') {
    return { count: state.count - action.amount }
  } else {
    return state;
  }
}

const increment = (amount) => {
  return {
    type: 'INCREMENT',
    amount
  }
};

const decrement = (amount) => {
  return {
    type: 'DECREMENT',
    amount
  }
};

const initialState = { count: 0 };

const store = createStore(reducer, initialState);

const unsubscribe = store.subscribe(() => console.log(store.getState().count));

console.log(store.getState());

store.dispatch(increment(2));
store.dispatch(increment(3));

unsubscribe();
store.dispatch(decrement(2));
console.log(store.getState());