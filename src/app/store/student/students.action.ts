import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/Models/student";

// GET ----------------------------
export const gettingStudents = createAction('[Students] Getting Students');
export const gotStudentsSuccess = createAction(
    '[Students] Successfully Getting Students',
    props<{students: Student[]}>()
);
export const gotStudentsFailure = createAction(
    '[Students] Failed Getting Students',
    props<{error: string}>()
);

// POST ----------------------------
export const postingStudents = createAction(
    '[Students] Posting Students',
    props<{student: Student}>()

);
export const postSuccess = createAction(
    '[Students] Successfully Post Students',
    props<{student: Student}>()
);
export const postFailure = createAction(
    '[Students] Failed Post Students',
    props<{error: string}>()
);