import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authentication from './authentication/authenticationSlice';
import reservations from './reservations/reservationsSlice';
import apartments from './apartments/apartmentsSlice';

const rootReducer = combineReducers({ authentication, reservations, apartments });

const store = configureStore({ reducer: rootReducer });

export default store;