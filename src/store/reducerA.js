const initialState = {
  a: 1,
}

const reducer = ( state = initialState, action ) => {

  if ( action.type === 'UPDATE_A' ) {
    return {
      ...state,
      a:state.a + state.b
    }
  }  
  return state
}

export default reducer