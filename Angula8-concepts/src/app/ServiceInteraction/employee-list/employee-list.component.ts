import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public prcv = this;
  private empID: number;
  constructor(private _employeeServiceService: EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this._employeeServiceService.getEmployees();
  }
  getEmployeeDetails = (id: number) => {
    this.empID=id
    console.log(id)
  }
}
