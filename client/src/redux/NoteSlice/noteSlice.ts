import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { Note } from "../../models/note";

export interface NoteState {
    allGeneratedNotes: Map<string | undefined,Note>;
}


// Define initial state
const initialState: NoteState = { allGeneratedNotes : new Map() };

enableMapSet();

// Define slice
const noteSlice = createSlice({
    name : "noteSlice",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<Note>) {
            state.allGeneratedNotes.set(action.payload.jobObject?._id, action.payload);
        },

        removeNote(state, action: PayloadAction<string>) {
            if (state.allGeneratedNotes.has(action.payload)) {
                state.allGeneratedNotes.delete(action.payload);
            }
        },

        clearNote(state) {

            state.allGeneratedNotes.clear();
        }
    }
});

export const {addNote, removeNote, clearNote} = noteSlice.actions;
export default noteSlice.reducer;
