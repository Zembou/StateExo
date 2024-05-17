import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/Models/student";

export const gettingStudents = createAction('[Students] Getting Students');
export const gotStudentsSuccess = createAction(
    '[Students] Successfully Getting Students',
    props<{students: Student[]}>()
);
export const gotStudentsFailure = createAction(
    '[Students] Failed Getting Students',
    props<{error: string}>()
);