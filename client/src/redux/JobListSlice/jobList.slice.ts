import { createSlice } from "@reduxjs/toolkit";

// Define Interface
export interface Job {
    title?: string,
    company?: string,
    city?: string,
    state?: string,
    salary?: number,
    remote?: number,
    contactName?: string,
    contactPhone?: string,
    contactEmail?: string,
    description?: string,
    datePosted?: Date,
}

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
