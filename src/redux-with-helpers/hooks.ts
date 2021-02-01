import { RootState } from './reducers/reducers'
import { Dispatch } from 'redux'
import {
  useDispatch as originalUseDispatch,
  useSelector as originalUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'

export const useSelector: TypedUseSelectorHook<RootState> = originalUseSelector
export const useDispatch = () => originalUseDispatch<Dispatch<AnyAction>>()
