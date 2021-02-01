import { combineReducers } from 'redux'
import { notesReducer } from './notes'
import { specialButtonReducer } from './specialButton'

export const reducer = combineReducers({
  notes: notesReducer,
  specialButton: specialButtonReducer,
})

export type RootState = ReturnType<typeof reducer>
