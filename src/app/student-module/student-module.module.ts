import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentService } from '../services/student/student.service';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from '../store/student/students.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffect } from '../store/student/students.effect';
import { MatHeaderRowDef, MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    StudentTableComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('students', studentReducer),
    EffectsModule.forFeature([StudentsEffect]),
    MatTableModule
  ],
  providers:[
    StudentService,
    MatTableDataSource
  ]
})
export class StudentModuleModule { }
