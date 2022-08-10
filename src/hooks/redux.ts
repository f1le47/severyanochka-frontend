import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allActionCreators } from 'redux/actions/allActionCreators';
import { AppDispatch, RootState } from './../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActionCreators, dispatch)
}