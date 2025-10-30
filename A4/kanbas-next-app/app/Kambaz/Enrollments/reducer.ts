import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
  showAllCourses: boolean;
}

const initialState: EnrollmentState = {
  enrollments: db.enrollments as Enrollment[],
  showAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const exists = state.enrollments.find(
        (e) => e.user === userId && e.course === courseId
      );
      if (!exists) {
        const newEnrollment: Enrollment = {
          _id: new Date().getTime().toString(),
          user: userId,
          course: courseId,
        };
        state.enrollments.push(newEnrollment);
      }
    },
    unenrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId)
      );
    },
  },
});

export const { toggleShowAllCourses, enrollCourse, unenrollCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
