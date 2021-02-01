export const createReducer = <S>(
  args: { [K in ActionTypes]?: (state: S, action: Action<K>) => Partial<S> },
  initial: S,
): Reducer<S> => (state = initial, action) => {
  const caseReducer = args[action.type] as any
  if (!caseReducer) {
    return state
  }

  const partialNewState = caseReducer(state, action)

  if (partialNewState === state) {
    return state
  }

  return { ...state, ...caseReducer(state, action) }
}

export const updateValue = <T>(
  record: Record<string, T>,
  key: string,
  updater: (value: T) => T,
): Record<string, T> => {
  const value = record[key]
  if (value === undefined) {
    return record
  } else {
    return {
      ...record,
      [key]: updater(value),
    }
  }
}

export const always = <T>(val: T) => () => val

export type GroupedById<T> = { byId: Record<string, T>; allIds: string[] }

export function groupByIds<T extends { id: string }>(data: readonly T[]): GroupedById<T> {
  const byId: Record<string, T> = {}
  const allIds: string[] = []

  for (const item of data) {
    byId[item.id] = item
    allIds.push(item.id)
  }

  return {
    byId,
    allIds,
  }
}
