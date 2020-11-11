import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  public list = [
    { "id": 1, "name": "Jane", "age": 20 },
    { "id": 2, "name": "DSD", "age": 32 },
    { "id": 3, "name": "RRRR", "age": 24 },
    { "id": 4, "name": "SFD", "age": 64 },
  ];
  constructor() { }
  public getEmployees = () => {
    return this.list;
  }
  public getEmployeesByID = (ID: number) => {
    let lst;
    let asd = this.list.forEach(function (details, index) {
      if (details.id == ID) {
        lst = details;
      }
    })
    return lst;
  }
}
