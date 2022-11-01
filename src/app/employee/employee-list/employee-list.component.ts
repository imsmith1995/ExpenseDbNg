import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  pageTitle: string = "Employee List";
  empls: Employee[] = [];
  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = false;
  
  constructor(
    private sys: SystemService,
    private emplsvc: EmployeeService
  ) { }

  sortBy(column: string): void {
    console.debug(`sortBy(${column})`)
    if(column === this.sortColumn) {
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  ngOnInit(): void {
    this.sys.checkLogin();
    this.emplsvc.list().subscribe({
      next: (res) => {
        console.debug("Employees:", res);
        this.empls = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
