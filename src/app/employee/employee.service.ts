import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl: string = `${this.sys.baseurl}/employees`;

  constructor(
    private sys: SystemService,
    private http: HttpClient
    ) { }

  login(email: string, password:string): Observable<Employee> {
    return this.http.get(`${this.baseurl}/${email}/${password}`) as Observable<Employee>;
  }

  list(): Observable<Employee[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Employee[]>;
  }

  get(id: number): Observable<Employee> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Employee>;
  }

  create(empl: Employee): Observable<Employee> {
    return this.http.post(`${this.baseurl}`, empl) as Observable<Employee>;
  }

  change(empl: Employee): Observable<any> {
    return this.http.put(`${this.baseurl}/${empl.id}`, empl) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
