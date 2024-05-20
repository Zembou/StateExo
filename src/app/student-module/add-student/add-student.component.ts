import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as StudentActions from '../../store/student/students.action';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate:new FormControl(),
  });

  onSubmit(){
    const student:Student = this.studentForm.value;
    if(!student.id) student.id=0
    this.store.dispatch(StudentActions.postingStudents({student:student})),
    this.router.navigate(['']);
  }

  constructor(private store: Store, private router: Router){}

}
