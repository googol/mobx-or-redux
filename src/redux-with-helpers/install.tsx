import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { FakeNotesService } from '../services'
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducers'
import { apiMiddleware } from './middleware/api'
import { scheduleMiddleware } from './middleware/schedule'

export function installReduxWithHelpers(services: { notes: FakeNotesService }): React.FC {
  const middleware = applyMiddleware(apiMiddleware(services.notes), scheduleMiddleware())
  const store = createStore(reducer, {}, composeWithDevTools(middleware))

  return ({ children }) => <Provider store={store}>{children}</Provider>
}
