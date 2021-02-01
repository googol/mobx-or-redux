import { createReducer, updateValue, always, groupByIds } from './tools'

export type Note = Readonly<{
  id: string
  text: string
}>

const initialState = {
  state: 'error' as 'initial' | 'loading' | 'loaded' | 'error',
  byId: {} as Readonly<Record<string, Note>>,
  allIds: [] as readonly string[],
  errorMessage: '' as string,
}

export type NotesState = typeof initialState

export const notesReducer = createReducer(
  {
    LOAD_NOTES: always({ state: 'loading' } as const),
    LOAD_NOTES_SUCCESS: (state, action) =>
      ({
        state: 'loaded',
        ...groupByIds(action.payload),
      } as const),
    LOAD_NOTES_ERROR: (state, action) =>
      ({
        state: 'error',
        byIds: {},
        allIds: [],
        errorMessage: action.payload.error,
      } as const),
    DELETE_NOTE: (state, action) => {
      const { id } = action.payload
      return {
        byId: Object.fromEntries(Object.entries(state.byId).filter(([k, v]) => k !== id)),
        allIds: state.allIds.filter((f) => f !== id),
      }
    },
    UPDATE_NOTE: (state, action) => {
      const { id, text } = action.payload
      return {
        byId: updateValue(state.byId, id, (note) => ({ ...note, text })),
      }
    },
    CREATE_NEW_NOTE: (state, action) => {
      const { id, text } = action.payload
      return {
        allIds: [...state.allIds, id],
        byId: {
          ...state.byId,
          [id]: {
            id,
            text,
          },
        },
      }
    },
  },
  initialState,
)
