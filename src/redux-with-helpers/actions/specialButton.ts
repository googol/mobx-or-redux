import { actionCreator } from './actionCreator'

declare global {
  export interface ActionPayloads {
    CHANGE_TEXT: string
  }
}

export const changeText = actionCreator('CHANGE_TEXT')
