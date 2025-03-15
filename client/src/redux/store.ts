import { configureStore } from "@reduxjs/toolkit";
import testFeatureReducer from "./TestFeature/TestFeatureSlice";
import jobfiltersReducer from './jobFilters.slice'
export const store = configureStore({
  reducer: {
    testFeature: testFeatureReducer,
    jobFilters: jobfiltersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
