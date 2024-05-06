import { AppSelector } from '../store/index';
import { AppDispatch } from '@/shared/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppSelector> = useSelector;