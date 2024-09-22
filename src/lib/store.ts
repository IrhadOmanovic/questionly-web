import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import landingPageSlice from '../features/landingPage/LandingPage.slice';
export const store = configureStore({
  reducer: {
    landingPage: landingPageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
