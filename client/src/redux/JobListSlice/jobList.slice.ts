import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../models/job";

export interface JobListState {
    allJobs: Array<Job>;
    activeJobId?: string;
}

// Define initial state
const initialState: JobListState = { allJobs: [], activeJobId: undefined};

// Define slice
const jobListSlice = createSlice({
    name : "jobList",
    initialState,
    reducers: {
        setJobList(state, action) {
            state.allJobs = action.payload;
        },
        
        setActiveJobId(state, action) {
            state.activeJobId = action.payload;
        }
    }
});

export const {setJobList, setActiveJobId} = jobListSlice.actions;
export default jobListSlice.reducer;
