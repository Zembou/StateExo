import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as StudentsAction from "./students.action";
import { StudentService } from "src/app/services/student/student.service";
import { catchError, map, mergeMap, of } from "rxjs";
import { Student } from "src/app/Models/student";

@Injectable()
export class StudentsEffect {
    getStudents$ = createEffect(() => 
        this.actions$.pipe(
            ofType(StudentsAction.gettingStudents),
            mergeMap(() => {
                return this.studentService.getStudents()
                    .pipe(
                        map((student) => StudentsAction.gotStudentsSuccess({students:student as Student[]})),
                        catchError((error) => of(StudentsAction.gotStudentsFailure({error:error.message})))
                    );
            })
        )
    );

    postStudent$ = createEffect(() => 
        this.actions$.pipe(
            ofType(StudentsAction.postingStudents),
            mergeMap((value) => {
                return this.studentService.createStudent(value.student).pipe(
                    map((student) => StudentsAction.postSuccess({student:student as Student})),
                    catchError((error) => of(StudentsAction.postFailure({error:error})))
                );
            })
        )
    );

    constructor(private actions$: Actions, private studentService: StudentService){}
}