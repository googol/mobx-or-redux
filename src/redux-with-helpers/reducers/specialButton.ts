import { createReducer } from './tools'

const initialState = {
  text: 'CLICK ME' as string,
}

export const specialButtonReducer = createReducer(
  {
    CHANGE_TEXT: (state, action) => ({ text: action.payload }),
  },
  initialState,
)
