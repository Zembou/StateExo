import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as StudentActions from '../../store/student/students.action';
import { StudentsSelector, isErrorSelector, isLoadingSelector } from 'src/app/store/student/students.selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable, map, tap } from 'rxjs';
import { Student } from 'src/app/Models/student';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit{
  loading$: Observable<boolean>|undefined;
  students$: Observable<Student[]>|undefined;
  error$: Observable<string|null>|undefined;
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate','action'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>
  constructor(private store: Store<AppStateInterface>,private router:Router)
  {
    this.Initialization();
  }
  
  ngOnInit(): void {
    this.store.dispatch(StudentActions.gettingStudents());
    this.students$?.subscribe((response)=> {this.dataSource.data = response});
  }

  private Initialization(){
    this.loading$ = this.store.pipe(select(isLoadingSelector));
    this.students$ = this.store.pipe(select(StudentsSelector));
    this.error$ = this.store.pipe(select(isErrorSelector));
  }

  onClick(){
    this.router.navigate(['Add']);
  }

  toEdit(id:number){
    this.router.navigate(['Edit',id]);
  }

  delete(id:number){
    this.store.dispatch(StudentActions.deletingStudents({id}));
  }

}
