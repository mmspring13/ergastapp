import {configureStore} from '@reduxjs/toolkit';
import {driversApi} from '../../features/drivers/actions/api.ts';
import {reducer as driversReducer} from '../../features/drivers/actions/store.ts';

export const store = configureStore({
  reducer: {
    [driversApi.reducerPath]: driversApi.reducer,
    drivers: driversReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(driversApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
