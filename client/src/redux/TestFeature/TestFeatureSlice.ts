import { createSlice } from "@reduxjs/toolkit";

// Define Interface
export interface testFeatureState {
    data1: boolean,
    data2: number,
    data3: string
}

// Define initial state
export const initialState: testFeatureState = {
    data1: false,
    data2: 100,
    data3: "test"
};

// Define slice
const testFeatureSlice = createSlice({
    name : "testFeature",
    initialState,
    reducers: {
        setData1(state, action) {
            state.data1 = action.payload;
        },
        setData2(state, action) {
            state.data2 = action.payload;
        },
        setData3(state, action) {
            state.data3 = action.payload;
        },
    }

});

export const {setData1, setData2, setData3} = testFeatureSlice.actions;
export default testFeatureSlice.reducer;
