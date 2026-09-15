import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";


const initialState = {
    isLoading: true,
    error: null,
  languages: [
    { code: "tr", name: "Turkish" },
    { code: "en", name: "English" },
    { code: "de", name: "German" },
    { code: "fr", name: "French" },
    { code: "ar", name: "Arabic" },
    { code: "ru", name: "Russian" },
    { code: "el", name: "Greek" },
    { code: "es", name: "Spanish" },
    { code: "zh", name: "Chinese" },
    { code: "az", name: "Azerbaijani" } 
  ],
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLanguages.pending, () => { })
        builder.addCase(getLanguages.rejected, (state, { error }) => {
            state.isLoading = false
            state.error = error.message
        })
        builder.addCase(getLanguages.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.languages = payload
        })
    },
})

export default languageSlice.reducer