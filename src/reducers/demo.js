const demoReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CREATE':
    return action.state;
  case 'UPDATE':
    return Object.assign({}, state, action.state);
  default:
    return state;
  }
}

export default demoReducer;
