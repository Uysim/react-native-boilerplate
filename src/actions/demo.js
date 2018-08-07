const demoActions = (dispatch) => ({
  create: () => { dispatch({ type: 'DEMO_ASYNC' }) },
  update: () => { dispatch({ type: 'DECREMENT' }) },
})

export default demoActions;
