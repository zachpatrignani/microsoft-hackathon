import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { Note } from "../../models/note";

interface TextInput {
    preferenceText?: string,
    impairmentText?: string
};

export interface NoteState {
    allGeneratedNotes: Map<string | undefined,Note>;
    textInput : TextInput;
}


// Define initial state
const initialState: NoteState = { allGeneratedNotes : new Map() , textInput : {}};

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
        },

        updatePreferenceText(state, action : PayloadAction<string>) {

            state.textInput.preferenceText = action.payload;
        },

        updateImpairmentsText(state, action : PayloadAction<string>) {

            state.textInput.impairmentText = action.payload;
        },

    
    }
});

export const {addNote, removeNote, clearNote, updateImpairmentsText, updatePreferenceText} = noteSlice.actions;
export default noteSlice.reducer;
