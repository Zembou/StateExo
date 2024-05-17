import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit{
  constructor(private studentService: StudentService){}
  
  ngOnInit(): void {
    console.table(this.studentService.getStudents());
  }

}
