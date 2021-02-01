import { Note } from '../reducers/notes'
import { actionCreator } from './actionCreator'

declare global {
  export interface ActionPayloads {
    LOAD_NOTES: undefined
    LOAD_NOTES_SUCCESS: readonly Note[]
    LOAD_NOTES_ERROR: { error: string }
    CREATE_NEW_NOTE: Note
    DELETE_NOTE: { id: string }
    UPDATE_NOTE: Note
  }
}

export const loadNotes = actionCreator('LOAD_NOTES')
export const loadSuccess = actionCreator('LOAD_NOTES_SUCCESS')
export const loadError = actionCreator('LOAD_NOTES_ERROR')
export const createNote = actionCreator('CREATE_NEW_NOTE')
export const deleteNote = actionCreator('DELETE_NOTE')
export const updateNote = actionCreator('UPDATE_NOTE')
