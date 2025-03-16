import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../models/job";

export interface JobListState {
    allJobs?: Array<Job>
}

// Define initial state
const initialState: JobListState = { allJobs: new Array<Job>};

// Define slice
const jobListSlice = createSlice({
    name : "jobList",
    initialState,
    reducers: {
        setJobList(state, action) {
            state.allJobs = action.payload;
        }
    }
});

export const {setJobList} = jobListSlice.actions;
export default jobListSlice.reducer;
