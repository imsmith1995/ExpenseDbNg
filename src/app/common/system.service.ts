import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInitService } from '../app-init.service';
import { Employee } from '../employee/employee.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  baseurl: string = this.appInit.config.baseurl;

 employee: any = null;

  constructor(
    private appInit: AppInitService,
    private router: Router
  ) { }

  checkLogin(): void {
    if(this.employee === null) {
      this.router.navigateByUrl("/empl/login");
    }
  }
}
