import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

export const selectStudents = (state: AppStateInterface) => state.students

export const isLoadingSelector = createSelector(
    selectStudents,
    (state) => state.isLoading
);

export const StudentsSelector = createSelector(
    selectStudents,
    (state) => state.students
);

export const isErrorSelector = createSelector(
    selectStudents,
    (state) => state.error
);