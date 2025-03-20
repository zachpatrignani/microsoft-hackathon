import { createSlice } from "@reduxjs/toolkit";

export interface JobFilters {
  wage?: number;
  _createdAt?: Date;
  workType?: string;
  employmentType?: string;
  search?: string;
}

// Define Interface
export interface JobFiltersState {
  filters: JobFilters;
}

// Define initial state
export const initialState: JobFiltersState = {
  filters: {
    wage: undefined,
    _createdAt: undefined,
    workType: undefined,
    employmentType: undefined,
    search: undefined,
  },
};

// Define slice
const jobFiltersSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {
    setSalary(state, action) {
      state.filters.wage = action.payload;
    },
    setDatePosted(state, action) {
      state.filters._createdAt = action.payload;
    },
    setWorkType(state, action) {
      state.filters.workType = action.payload;
    },
    setSearch(state, action) {
      state.filters.search = action.payload;
    },
    setEmploymentType(state, action) {
      state.filters.employmentType = action.payload;
    },
  },
});

export const {
  setSalary,
  setDatePosted,
  setWorkType,
  setSearch,
  setEmploymentType
} = jobFiltersSlice.actions;
export default jobFiltersSlice.reducer;
