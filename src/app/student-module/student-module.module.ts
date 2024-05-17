import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentService } from '../services/student/student.service';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from '../store/student/students.reducers';


@NgModule({
  declarations: [
    StudentTableComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('students', studentReducer)
  ],
  providers:[
    StudentService
  ]
})
export class StudentModuleModule { }
