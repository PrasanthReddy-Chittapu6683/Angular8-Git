import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgGridServicesService {

  constructor(private http: HttpClient) { }
  fetch() {
    return this.http.get('http://localhost:3000/userDetails/id=1');
  }

  getUsers(params) {
    return this.http.post('http//users', params);
    // return this.http.get('http://localhost:3000/userDetails');
  }
}
