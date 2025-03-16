import { createSlice } from "@reduxjs/toolkit";

// Define Interface
export interface JobFiltersState {
    salary?: number,
    datePosted?: Date,
    workType?: string
}

// Define initial state
export const initialState: JobFiltersState = {
    salary: undefined,
    datePosted: undefined,
    workType: undefined
};

// Define slice
const jobFiltersSlice = createSlice({
    name : "jobList",
    initialState,
    reducers: {
        setSalary(state, action) {
            state.salary = action.payload;
        },
        setDatePosted(state, action) {
            state.datePosted = action.payload;
        },
        setWorkType(state, action) {
            state.workType = action.payload;
        }
    }

});

export const {setSalary, setDatePosted, setWorkType} = jobFiltersSlice.actions;
export default jobFiltersSlice.reducer;
