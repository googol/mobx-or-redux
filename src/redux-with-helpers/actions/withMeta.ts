export const withMeta = <T extends ActionTypes>(
  action: Action<T>,
  meta: Partial<MetaProperties<T>>,
): Action<T> => ({
  ...action,
  meta: action.meta === undefined ? meta : { ...action.meta, ...meta },
})
