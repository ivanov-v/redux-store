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
    this._callbacks = [];
  }
  
  get state() {
    return this._state;
  }
  
  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach((callback) => callback());
  }
  
  subscribe(callback) {
    this._callbacks.push(callback);
    return () => this._callbacks = this._callbacks.filter((cb) => cb !== callback);
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

const initialState = 0;

const store = new Store(initialState, updateState);

const unsubscribe = store.subscribe(() => console.log(store.state));

store.update(incrementAction);
store.update(incrementAction);

console.log(store);
unsubscribe();
store.update(decrementAction);
console.log(store);