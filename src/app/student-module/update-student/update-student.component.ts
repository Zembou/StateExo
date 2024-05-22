import { Component } from '@angular/core';
import { AddStudentComponent } from '../add-student/add-student.component';
import * as StudentActions from '../../store/student/students.action';
import { Student } from 'src/app/Models/student';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { StudentsSelector } from 'src/app/store/student/students.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStateInterface } from 'src/app/types/appState.interface';

@Component({
  selector: 'app-update-student',
  templateUrl: '../add-student/add-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent extends AddStudentComponent{
  students$: Observable<Student[]>|undefined;
  students: Student[]|undefined;
  
  override ngOnInit(): void {
    this.Initialization();
    this.UpdateInit();
  }
  
  override onSubmit(){
    const student:Student = this.studentForm.value;
    this.submited= true;
    if(!student.id) student.id=0
    this.store.dispatch(StudentActions.updatingStudents({student:student}));
  }

  private UpdateInit(){
    this.students$ = this.store.pipe(select(StudentsSelector));
    this.students$?.subscribe((response)=> {this.students = response});
    const id = this.route.snapshot.paramMap.get('id');
    if(this.students && id){
      const student = this.students.find(s => s.id == +id);
      if(student){
        this.studentForm.patchValue(student)
      }
    }
  }
  constructor(
    protected override store: Store<AppStateInterface>, 
    protected override router: Router,
    private route:ActivatedRoute)
    {
    super(store,router);
  }

}
