import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { Job } from "../../models/job";

export interface ExportState {
    allSelectedJobs: Map<string,Job>;
}

// Define initial state
const initialState: ExportState = { allSelectedJobs : new Map() };

enableMapSet();

// Define slice
const exportSlice = createSlice({
    name : "exportSlice",
    initialState,
    reducers: {
        addJob(state, action: PayloadAction<Job>) {
            state.allSelectedJobs.set(action.payload._id, action.payload);
        },

        removeJob(state, action: PayloadAction<string>) {
            if (state.allSelectedJobs.has(action.payload)) {
                state.allSelectedJobs.delete(action.payload);
            }
        }
    }
});

export const {addJob, removeJob} = exportSlice.actions;
export default exportSlice.reducer;
