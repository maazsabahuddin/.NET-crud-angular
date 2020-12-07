import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import Employee from  './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'routing-app';
  userForm: any;  
  loading:boolean = false;
  response: any;
  allEmployees!: Observable<Employee[]>;
  users: Array<Employee> = new Array();
  user_data: any;

  // constructor() { }
  constructor(private formbulider: FormBuilder, private http: HttpClient, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.userForm = this.formbulider.group({ 
      name: ['', [Validators.required]],  
      email: ['', [Validators.required]],  
      phone: ['', [Validators.required]],  
      role: ['', [Validators.required]],  
    });  
    // this.loadAllEmployees(); 
    this.fetchData();  
  }

  fetchData(): void {
    this.employeeService.getAllEmployee().subscribe((response)=>{
      // console.log(response);
      this.loading = true;
      response.forEach((data) => {
        this.users.push(new Employee(data.id, data.name, data.email, data.phone, data.role, data.is_delete));
      })
    });
  }

  insertSuccessMsg: string = "";
  insertDataApi(user: any): void {
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    // this.http.post<Employee>(this.url + '/post/user',  
    // employee, httpOptions);
    // this.user_data= {id: 18, name: "AAAA", email: "aaaaa", phone: "2", role: 1};
    this.employeeService.createEmployee(user).subscribe((response)=>{
      if(Number(response) == 200){
        this.insertSuccessMsg = "Data inserted!";
        console.log("INSERTED");
      }
      else{
        console.log("Error occured! ", response);
      }
    });
  }

  successMsg: string = "";
  updateDataApi(user: any): void {
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    // this.http.post<Employee>(this.url + '/post/user',  
    // employee, httpOptions);
    // this.user_data= {id: 18, name: "AAAA", email: "aaaaa", phone: "2", role: 1};
    // console.log(user);
    this.employeeService.updateEmployee(user).subscribe((response)=>{
      if(Number(response) == 200){
        this.email = "";
        this.name = "";
        this.successMsg = "Data updated!";
        console.log("UPDATED");
        return;
      }
      else{
        console.log("Error occured! ", response);
      }
    });
  }

  deleteDataApi(user: any): void {
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    // this.http.post<Employee>(this.url + '/post/user',  
    // employee, httpOptions);
    // this.user_data= {id: 18, name: "AAAA", email: "aaaaa", phone: "2", role: 1};
    // console.log(user);
    this.employeeService.deleteEmployeeById(user.email).subscribe((response)=>{
      if(Number(response) == 200){
        this.delSuccessMsg = "User successfully deleted!";
        console.log("Deleted");
        return;
      }
      else{
        console.log("Error occured! ", response);
        this.delSuccessMsg = "Email doesnot exist " + response;
        return;
      }
    });
  }

  onSubmit(data: any) {
    // Process checkout data here
    this.user_data = {
      id: Math.floor(Math.random() * 100000),
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      is_delete: false,
    }
    this.insertDataApi(this.user_data);
    this.user_data = "";
    this.userForm.reset();

    console.warn('Your order has been submitted');
  }

  email: any;
  name: any;
  errorMsg: string = "";
  updateUser() {
    if(!this.name || !this.email){
      this.errorMsg = "Please fill out all the fields.";
      return;
    }
    this.user_data = {name: this.name, email: this.email};
    this.updateDataApi(this.user_data);
    this.user_data = "";
    this.errorMsg  = "";
  }

  UpdateError(){
    this.errorMsg = "";
    this.user_data = "";
    return;
  }

  delEmail: any;
  delSuccessMsg: string ="";
  deleteUser(){
    if(!this.delEmail){
      this.delSuccessMsg = "Please fill out all the fields.";
      return;
    }
    this.user_data = {email: this.delEmail};
    this.deleteDataApi(this.user_data);
  }
}
