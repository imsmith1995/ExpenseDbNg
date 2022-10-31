import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  pageTitle: string = "Employee Detail";
  IsDetailPage: boolean = true;
  empl!: Employee;

  constructor(
    private emplsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    showVerifyButton: boolean = false;

    remove(): void {
      this.showVerifyButton = !this.showVerifyButton;
    }

    verifyDelete(): void {
      this.emplsvc.remove(this.empl.id).subscribe({
        next: (res) => {
          console.debug("Employee Deleted!");
          this.router.navigateByUrl("/empl/list");
        },
        error: (err) => {
          console.error(err);
        }
      })
    };

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
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
