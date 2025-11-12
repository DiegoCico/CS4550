import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {},
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignment = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
