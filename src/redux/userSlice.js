import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    totalScore: 0,
  },
  reducers: {
    updateTotalScore: (state, action) => {
      console.log("sliace state ", state)
      console.log("sliace action ", action)
      console.log("sliace action totalScore ", action.payload)
      state.totalScore = action.payload;
      console.log("sliace action totalScore after ", state.totalScore )
    },
  },
});

export const { updateTotalScore } = userSlice.actions;
export default userSlice.reducer;