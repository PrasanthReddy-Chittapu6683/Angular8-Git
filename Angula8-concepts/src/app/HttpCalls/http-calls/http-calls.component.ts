import { Component, OnInit } from '@angular/core';
import { HttpServiceCallsService } from './http-service-calls.service'

@Component({
  selector: 'app-http-calls',
  templateUrl: './http-calls.component.html',
  styleUrls: ['./http-calls.component.scss']
})
export class HttpCallsComponent implements OnInit {
  private employeesDetails: any;
  constructor(private _httpServiceCallsService: HttpServiceCallsService) { }
  private errorMessage: string;
  ngOnInit() {

    this._httpServiceCallsService.getEmployeesData()
      .subscribe(response => {
        this.employeesDetails = response.slice(0, 10).map(i => {
          return i
        });
      },
        error => {
          this.errorMessage = error;
        })
    this._httpServiceCallsService.getErrorData()
      .subscribe(response => {
        // this.employeesDetails = []
        // this.employeesDetails = response.slice(0, 10).map(i => {
        //   return i
        // });
      },
        error => {
          this.errorMessage = error;
        })

  }

}
