import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './Student';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:7856/students/';
  }

  findAllStudent(): Observable<any> {
    return this.http.get(this.usersUrl + "showallstudents/");
  }

  public save(user: Student) {
    return this.http.post<Student>(this.usersUrl + "savestudent/", user);
  }
}
