export type ActionCreatorParams<T extends ActionTypes> = ActionPayloads[T] extends undefined
  ? []
  : [ActionPayloads[T]]

export const actionCreator = <T extends ActionTypes>(actionType: T) => (
  ...params: ActionCreatorParams<T>
): Action<T> =>
  ({
    type: actionType,
    payload: params.length === 1 ? params[0] : undefined,
  } as any)
