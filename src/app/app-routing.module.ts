import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './student-module/student-table/student-table.component';
import { AddStudentComponent } from './student-module/add-student/add-student.component';

const routes: Routes = [
  { path: 'Add', component: AddStudentComponent },
  { path: '', component: StudentTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
