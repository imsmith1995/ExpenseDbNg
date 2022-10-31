import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  pageTitle: string = "Employee Create";
  IsDetailPage: boolean = false;
  empl: Employee = new Employee();

  constructor(
    private emplsvc: EmployeeService,
    private router: Router
  ) { }

  save(): void {
    this.emplsvc.create(this.empl).subscribe({
      next: (res) => {
        console.debug("Employee Created!");
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {

  }

}
