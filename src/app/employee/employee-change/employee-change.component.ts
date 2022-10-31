import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-change',
  templateUrl: './employee-change.component.html',
  styleUrls: ['./employee-change.component.css']
})
export class EmployeeChangeComponent implements OnInit {

  pageTitle: string = "Employee Edit";
  IsDetailPage: boolean = false;
  empl!: Employee;

  constructor(
    private emplsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.emplsvc.change(this.empl).subscribe({
      next: (res) => {
        console.debug("Employee Changed!");
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.emplsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Employee:", res);
        this.empl = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}