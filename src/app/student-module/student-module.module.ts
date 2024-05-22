import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentService } from '../services/student/student.service';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from '../store/student/students.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffect } from '../store/student/students.effect';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AddStudentComponent } from './add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UpdateStudentComponent } from './update-student/update-student.component';


@NgModule({
  declarations: [
    StudentTableComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('students', studentReducer),
    EffectsModule.forFeature([StudentsEffect]),
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers:[
    StudentService,
    MatTableDataSource
  ]
})
export class StudentModuleModule { }
