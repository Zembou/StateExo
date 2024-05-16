import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/Models/student';

const LINK_API: string = 'https://localhost:7047/api/Etudiants'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  public getStudents(){
    return this.httpClient.get(LINK_API);
  }

  public getStudentById(id: number){
    return this.httpClient.get(LINK_API+'/'+id);
  }

  public createStudent(student: Student){
    return this.httpClient.post(LINK_API, student);
  }

  public deleteStudent(id: number){
    return this.httpClient.delete(LINK_API+'/'+id);
  }

  public updateStudent(student: Student){
    return this.httpClient.put(LINK_API,'student');
  }

}
