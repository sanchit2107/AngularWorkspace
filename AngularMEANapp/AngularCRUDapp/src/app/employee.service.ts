import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private baseUrl = 'http://localhost:9090/';

  getEmployeeList(): import("rxjs").Observable<import("./Employee").Employee[]> {
    throw new Error("Method not implemented!!");
  }

}
