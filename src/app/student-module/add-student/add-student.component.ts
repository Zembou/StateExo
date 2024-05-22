import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as StudentActions from '../../store/student/students.action';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { Observable } from 'rxjs';
import { isErrorSelector, isLoadingSelector } from 'src/app/store/student/students.selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  loading$: Observable<boolean>|undefined;
  error$: Observable<string|null>|undefined;
  submited: boolean = false;
  loading: boolean = false;
  error: boolean = false;

  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate:new FormControl(),
  });

  ngOnInit(): void {
    this.Initialization();
  }

  onSubmit(){
    const student:Student = this.studentForm.value;
    this.submited= true;
    if(!student.id) student.id=0
    this.store.dispatch(StudentActions.postingStudents({student:student}));
  }

  constructor(private store: Store<AppStateInterface>, private router: Router){}

  private Initialization(){
    this.loading$ = this.store.pipe(select(isLoadingSelector));
    this.loading$.subscribe(res => {
      this.loading= res; 
      if(this.loading&&this.error&&this.submited){
        this.router.navigate(['']);
      } else if(this.loading&&!this.error&&this.submited){
        this.submited=false;
      }
    });
    this.error$ = this.store.pipe(select(isErrorSelector));
    this.error$.subscribe(res => this.error = !res);
  }
}
