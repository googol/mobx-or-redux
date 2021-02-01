import { MiddlewareAPI, Dispatch } from 'redux'
import { RootState } from './reducers/reducers'

// These types are declared as global, since they are needed all around the project
declare global {
  type Selector<T> = (state: RootState) => T

  // eslint-disable-next-line
  interface ActionPayloads {}

  type ActionTypes = keyof ActionPayloads

  // eslint-disable-next-line
  interface MetaProperties<T extends ActionTypes> {}

  // A little TS trick for getting the inference of action payloads to work correctly
  // The conditional type OneOfActions forces the Action types to be separate via the
  // distributivity of unions over conditional types
  type Action<T extends ActionTypes> = T extends ActionTypes
    ? {
        type: T
        payload: ActionPayloads[T]
        meta?: Partial<MetaProperties<T>>
      }
    : never
  type AnyAction = Action<ActionTypes>

  type Reducer<S> = (state: S | undefined, action: AnyAction) => S

  export type ActionCreatorParams<T extends ActionTypes> = ActionPayloads[T] extends undefined
    ? []
    : [ActionPayloads[T]]

  export interface Middleware {
    (api: MiddlewareAPI<Dispatch, RootState>): (
      next: Dispatch<AnyAction>,
    ) => (action: AnyAction) => any
  }
}
