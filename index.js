let state = 0;

function updateState(state, action) {
  if (action === 'INCREMENT') {
    return state + 1;
  } else if (action === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}