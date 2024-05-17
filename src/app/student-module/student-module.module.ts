import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentService } from '../services/student/student.service';



@NgModule({
  declarations: [
    StudentTableComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    StudentService
  ]
})
export class StudentModuleModule { }
