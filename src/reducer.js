export const exampleInitialState = {}

function reducer (state = exampleInitialState, action) {
  switch (action.type) {
    case 'TICK_CLOCK':
      return state
    default:
      return state
  }
}

export default reducer
