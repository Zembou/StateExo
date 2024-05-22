import { createReducer, on } from "@ngrx/store";
import { StudentsStateInterface } from "./students.state";
import * as StudentsAction from "./students.action"
import { state } from "@angular/animations";

export const initialState: StudentsStateInterface = {
    isLoading:false,
    students:[],
    error:null,
}

export const studentReducer = createReducer(
    initialState,
    // GET -------------------
    on(
        StudentsAction.gettingStudents,
        state => ({...state, isLoading:true})
    ),
    on(
        StudentsAction.gotStudentsSuccess,
        (state, action) => 
            ({...state, 
                isLoading:false, 
                students:action.students,
                error:null
            })
    ),    
    on(
        StudentsAction.gotStudentsFailure,
        (state, action) => 
            ({...state, 
                isLoading:false, 
                error:action.error
            })
    ),
    // POST ------------------
    on(
        StudentsAction.postingStudents,
        state => ({...state, isLoading:true})
    ),
    on(
        StudentsAction.postSuccess,
        (state,action) => ({...state, isLoading:false, students:state.students.concat(action.student),error:null})
    ),
    on(
        StudentsAction.postFailure,
        (state,action) => ({...state, isLoading:false, error:action.error})
    ),
    // PUT -------------------
    on(
        StudentsAction.updatingStudents,
        (state) => ({...state,isLoading:true})
    ),
    on(
        StudentsAction.updateSuccess,
        (state,action) => {
            var newStudents = [...state.students];
            var newState:StudentsStateInterface = {...state};
            const updatedStudent = newStudents.findIndex(stud => stud.id == action.student.id);
            if(updatedStudent) {
                newStudents[updatedStudent] = action.student;
            }
            newState.students = [...newStudents];
            newState.isLoading=false;
            newState.error=null;
            return newState;
        }
    ),
    on(
        StudentsAction.updateFailure,
        (state,action)=> ({...state,isLoading:false,error:action.error})
    )
)