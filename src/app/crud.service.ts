import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  //create user
  createUser(data: any): Observable<any> {
    return this.http.post('https://node-initial-hitesh.herokuapp.com/v1/auth/register', data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post('https://node-initial-hitesh.herokuapp.com/v1/auth/login', data);
  }
}
