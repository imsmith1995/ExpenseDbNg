import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private sys: SystemService,
    private emplsvc: EmployeeService,
    private router: Router
  ) { }

  login(): void {
    this.sys.employee = null;
    this.emplsvc.login(this.email, this.password).subscribe({
      next: (res) => {
        console.debug("Employee:", res);
        this.sys.employee = res;
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        if(err.status === 404){
          this.message = "Email & Password not found."
        }
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
