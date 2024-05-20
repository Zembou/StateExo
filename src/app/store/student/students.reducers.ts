import { createReducer, on } from "@ngrx/store";
import { StudentsStateInterface } from "./students.state";
import * as StudentsAction from "./students.action"

export const initialState: StudentsStateInterface = {
    isLoading:false,
    students:[],
    error:null,
}

export const studentReducer = createReducer(
    initialState,
    on(
        StudentsAction.gettingStudents,
        state => ({...state, isLoading:true})
    ),
    on(
        StudentsAction.gotStudentsSuccess,
        (state, action) => 
            ({...state, 
                isLoading:false, 
                students:action.students
            })
    ),    
    on(
        StudentsAction.gotStudentsFailure,
        (state, action) => 
            ({...state, 
                isLoading:false, 
                error:action.error
            })
    )
)