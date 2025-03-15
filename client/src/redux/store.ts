import { configureStore } from "@reduxjs/toolkit";
import testFeatureReducer from "./TestFeature/TestFeatureSlice";

export const store = configureStore({
  reducer: {
    testFeature: testFeatureReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
