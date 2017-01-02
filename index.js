let state = 0;

function updateState(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
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

state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {});
console.log(state);