const initialState = {
    poop:"extra poop"
}

export const GATHER_POOP = 'GATHER_POOP'

export const gatherPoop = (poop) => ({
  type: GATHER_POOP,
  payload: poop
})

export default (state = initialState, action) => {
  switch (action.type) {

  case GATHER_POOP:
    return Object.assign({},state,{poop:action.payload})
        
  default:
    return state
  }
}

