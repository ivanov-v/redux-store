function reducer(state = { count: 0 }, action) {
  if (action.type === 'INCREMENT') {
    return { count: state.count + action.amount }
  } else if (action.type === 'DECREMENT') {
    return { count: state.count - action.amount }
  } else {
    return state;
  }
}

const incrementAction = {
  type: 'INCREMENT',
  amount: 2
};

const decrementAction = {
  type: 'DECREMENT',
  amount: 1
};

const initialState = { count: 0 };

const store = createStore(reducer, initialState);

const unsubscribe = store.subscribe(() => console.log(store.getState().count));

console.log(store.getState());

store.dispatch(incrementAction);
store.dispatch(incrementAction);

unsubscribe();
store.dispatch(decrementAction);
console.log(store.getState());