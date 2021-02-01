import { installReduxWithHelpers } from './redux-with-helpers/install'
import { FakeNotesService } from './services'
import { useDispatch, useSelector } from './redux-with-helpers/hooks'
import { NotesContainer } from './components/NotesContainer'
import { Note } from './components/Note'
import { NotesEditor } from './components/NotesEditor'
import { createNote, loadNotes, updateNote } from './redux-with-helpers/actions/notes'
import { Button } from '@react95/core'
import React from 'react'
import { SpecialButton } from './redux-with-helpers/SpecialButton'

export function installReduxNotesAppWithHelpers() {
  const ReduxProvider = installReduxWithHelpers({ notes: new FakeNotesService() })
  return () => (
    <ReduxProvider>
      <ReduxNotes />
    </ReduxProvider>
  )
}

function ReduxNotes() {
  const notes = useSelector((state) => state.notes.allIds.map((id) => state.notes.byId[id]))
  const dispatch = useDispatch()
  const onChange = React.useCallback(
    (note: { id: string; text: string }) => {
      dispatch(updateNote(note))
    },
    [dispatch],
  )
  return (
    <div>
      <NotesContainer>
        {notes.map((n) => (
          <Note text={n.text} name={n.id} onChange={onChange} />
        ))}
      </NotesContainer>
      <NotesEditor
        onSubmit={(note) => {
          dispatch(createNote(note))
        }}
      />
      <br />
      <Button onClick={() => dispatch(loadNotes())}>load</Button>
      <SpecialButton />
    </div>
  )
}
