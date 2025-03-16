import { configureStore } from "@reduxjs/toolkit";
import testFeatureReducer from "./TestFeature/TestFeatureSlice";
import jobfiltersReducer from './jobFilters.slice'
import jobListReducer from "./JobListSlice/jobList.slice";

export const store = configureStore({
  reducer: {
    testFeature: testFeatureReducer,
    jobFilters: jobfiltersReducer,
    jobList: jobListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
