import { Component, OnInit } from '@angular/core';
import { Store, StoreModule, select } from '@ngrx/store';
import * as StudentActions from '../../store/student/students.action';
import { StudentsSelector, isErrorSelector, isLoadingSelector } from 'src/app/store/student/students.selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit{
  loading$: Observable<boolean>|undefined;
  students$: Observable<Student[]>|undefined;
  error$: Observable<string|null>|undefined;
  constructor(private store: Store<AppStateInterface>)
  {
    this.Initialization();
  }
  
  ngOnInit(): void {
    this.store.dispatch(StudentActions.gettingStudents());
  }

  private Initialization(){
    this.loading$ = this.store.pipe(select(isLoadingSelector));
    this.students$ = this.store.pipe(select(StudentsSelector));
    this.error$ = this.store.pipe(select(isErrorSelector));
  }

}
