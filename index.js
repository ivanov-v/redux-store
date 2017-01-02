function updateState(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
}

class Store {
  constructor(state, updateState) {
    this._state = state;
    this._updateState = updateState;
  }
  
  get state() {
    return this._state;
  }
  
  update(action) {
    this._state = this._updateState(this._state, action);
  }
}

const incrementAction = {
  type: 'INCREMENT',
  amount: 4
};

const decrementAction = {
  type: 'DECREMENT',
  amount: 1
};

const initialState = 0;

const store = new Store(initialState, updateState);

store.update(incrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update({});
console.log(store.state);