import { Component, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import * as StudentActions from '../../store/student/students.action';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit{
  constructor(private store: Store){}
  
  ngOnInit(): void {
    console.table(this.store);
  }

}
