import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { User } from '../models/user.model';
const baseUrl = 'http://127.0.0.1:8000/task/';
const userurl = 'http://127.0.0.1:8000/user/'
@Injectable({
  providedIn: 'root'
})
export class TaskapiService {
  allUser: User[] = [];
  constructor(private http: HttpClient) { }
  // get all
  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl);
  }

  // get
  getDataById(id: any): Observable<Task> {
    return this.http.get<Task>(`${baseUrl}${id}`);
  }
  // post
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  // update
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}${id}`, data);
  }
  // delete
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}${id}`);
  }
  // delete all
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  // find by name
  // findByTitle(title: any): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${baseUrl}?name=${title}`);
  // }

  // user get
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(userurl);
  }

  // post User
  createUser(data: any): Observable<any> {
    return this.http.post(userurl, data);
  }
  // get by id user
  getUserById(id: any): Observable<User> {
    return this.http.get<User>(`${userurl}${id}`);
  }

  // login and dashboard
  public dashboardDisplay: boolean = false;
  public loginDisplay: boolean = true;
  


}
