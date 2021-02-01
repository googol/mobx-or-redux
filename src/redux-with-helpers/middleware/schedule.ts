declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface MetaProperties<T extends ActionTypes> {
    schedule: {
      timeout?: number
      action: AnyAction
    }
  }
}

export const scheduleMiddleware = (): Middleware => ({ getState, dispatch }) => (next) => (
  action,
) => {
  next(action)

  const { meta: { schedule = undefined } = {} } = action
  if (schedule) {
    const { timeout, action: nextAction } = schedule
    if (timeout && timeout > 0) {
      setTimeout(() => dispatch(nextAction), timeout)
    } else {
      dispatch(nextAction)
    }
  }
}
