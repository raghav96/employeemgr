import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
}
