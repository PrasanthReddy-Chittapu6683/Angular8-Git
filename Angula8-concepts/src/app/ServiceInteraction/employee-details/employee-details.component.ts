import { Component, OnInit, Input } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() public empID: number;
  public employees = [];

  constructor(private _employeeServiceService: EmployeeServiceService) { }

  ngOnInit() {
    if (this.empID) {


      this.employees = [];
      this.employees = this._employeeServiceService.getEmployeesByID(this.empID);
    }

  }
  ngOnChanges = () => {

  }

}
