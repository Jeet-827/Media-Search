import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    result: [],
    activetab: 'photo',
    loading: false,
    error: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },

    setResult: (state, action) => {
      state.result = action.payload
      state.loading = false
      state.error = false
    },

    setActivetab: (state, action) => {
      state.activetab = action.payload
    },

    setLoading: (state) => {
      state.loading = true
      state.error = false
    },

    setError: (state) => {
      state.error = true
      state.loading = false
    }
  }
})

export const {
  setQuery,
  setResult,
  setActivetab,
  setLoading,
  setError
} = DataSlice.actions

export default DataSlice.reducer
