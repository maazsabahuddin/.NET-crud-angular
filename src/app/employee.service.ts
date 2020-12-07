import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import Employee from './employee';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  url = 'http://localhost:50637/api/';  
  constructor(private http: HttpClient) { }  
  // constructor() {}

  public getContacts(){
    // return this.http.get<Employee[]>(`${this.url}/user`);
    // this.http
    //   .get("data-url")
    //   .catch((err: HttpErrorResponse) => {
    //     // simple logging, but you can do a lot more, see below
    //     console.error('An error occurred:', err.error);
    //   });
  }

  getAllEmployee(): Observable<Employee[]> {  
    return this.http.get<Employee[]>(this.url + '/user');  
  }  
  getEmployeeById(employeeId: string): Observable<Employee> {  
    return this.http.get<Employee>(this.url + '/user/' + employeeId);  
  }  
  createEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Employee>(this.url + '/post/user',  
    employee, httpOptions);  
  }  
  updateEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Employee>(this.url + '/update/user',  
    employee, httpOptions);  
  }  
  deleteEmployeeById(employeeEmail: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/delete/user?email=' +employeeEmail);
    // return this.http.delete<number>(this.url + '/delete/user', httpOptions);
  }
}
