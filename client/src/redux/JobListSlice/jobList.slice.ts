import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../models/job";

export interface JobListState {
    allJobs: Array<Job>;
    activeJobId?: string;
    currentPage: number;
}

// Define initial state
const initialState: JobListState = { allJobs: [], activeJobId: undefined, currentPage: 0};

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
        },

        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
});

export const {setJobList, setActiveJobId, setCurrentPage} = jobListSlice.actions;
export default jobListSlice.reducer;
