import { configureStore } from "@reduxjs/toolkit";
import { testFeatureReducer } from "./TestFeature/reducer";

const store = configureStore({
  reducer: {
    testFeature: testFeatureReducer,
  },
});

export default store;