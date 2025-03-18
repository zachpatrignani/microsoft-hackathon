import { configureStore } from "@reduxjs/toolkit";
import testFeatureReducer from "./TestFeature/TestFeatureSlice";
import jobfiltersReducer from './jobFilters.slice'
import jobListReducer from "./JobListSlice/jobList.slice";
import exportSliceReducer from "./ExportSlice/exportSlice";

export const store = configureStore({
  reducer: {
    testFeature: testFeatureReducer,
    jobFilters: jobfiltersReducer,
    jobList: jobListReducer,
    exportSlice: exportSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
