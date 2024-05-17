import { Component, OnInit } from '@angular/core';
import { Store, StoreModule, select } from '@ngrx/store';
import * as StudentActions from '../../store/student/students.action';
import { isLoadingSelector } from 'src/app/store/student/students.selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit{
  loading$: Observable<boolean>;
  constructor(private store: Store<AppStateInterface>)
  {
    this.loading$ = this.store.pipe(select(isLoadingSelector));
  }
  
  ngOnInit(): void {
    this.store.dispatch(StudentActions.gettingStudents());
  }

}
