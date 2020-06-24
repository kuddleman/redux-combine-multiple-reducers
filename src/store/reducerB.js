const initialState = {
  b: 2
}

const reducer = ( state = initialState, action ) => {

  if ( action.type === 'UPDATE_B' ) {
    return {
      ...state,
      b:state.a + state.b
    }
  }  
  return state
}

export default reducer