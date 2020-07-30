import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './iEmployee';
import { Observable, of, throwError } from 'rxjs';

import { catchError, map, tap, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceCallsService {
  private endpoint = "http://localhost:3000/userDetails"
  constructor(private _httpClient: HttpClient) { }




  // getEmployeesData(): Observable<IEmployee[]> {
  //   return this._httpClient.get<IEmployee[]>(this.endpoint)
  //     .pipe(retry(1), catchError(this.handleError)
  //     );
  // }
  // getErrorData(): Observable<IEmployee[]> {
  //   return this._httpClient.get<IEmployee[]>(this.endpoint + "S")
  //     .pipe(retry(1), catchError(this.handleError)
  //     );
  // }
  getEmployeesData(): Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>(this.endpoint)
  }
  getErrorData(): Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>(this.endpoint + "S")
  }

  // private handleError(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }
}
