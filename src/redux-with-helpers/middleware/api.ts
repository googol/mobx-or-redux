import { FakeNotesService } from '../../services'
import { loadError, loadSuccess } from '../actions/notes'

export const apiMiddleware = (notes: FakeNotesService): Middleware => ({ getState, dispatch }) => {
  return (next) => async (action) => {
    next(action)

    if (action.type === 'LOAD_NOTES') {
      try {
        const data = await notes.getNotes()
        next(loadSuccess(data))
      } catch (e) {
        next(loadError({ error: e.message }))
      }
    }
  }
}
