import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import Employee from  '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {

  employeeForm: any;  
  allEmployees!: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employeeForm = this.formbulider.group({  
    //   id: ['', [Validators.required]],  
    //   name: ['', [Validators.required]],  
    //   email: ['', [Validators.required]],  
    //   phone: ['', [Validators.required]],  
    //   role: ['', [Validators.required]],  
    //   PinCode: ['', [Validators.required]],  
    // });  
    this.loadAllEmployees();  
  }

  loadAllEmployees() {
    // this.allEmployees = this.employeeService.getAllEmployee();
    // console.log(this.allEmployees);
    // this.employeeService.getAllEmployee().subscribe((response)=>{
    //   console.log(response);
    // });
  } 


}
