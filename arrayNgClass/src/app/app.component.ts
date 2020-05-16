import { Component } from '@angular/core';
import { Employee } from './Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    /*employees=[
      {"empid":"1001", "name":"Saurabh", "age":35},
      {"empid":"1002", "name":"Mihir", "age":22},
      {"empid":"1003", "name":"Ravi", "age":21},
    ]*/
    emp: Employee[] = [
      new Employee(1001, 'Prashant', 21),
      new Employee(1002, 'Sanchit', 22),
      new Employee(1003, 'Riya', 15)
    ];
    addEmployee(empid: HTMLInputElement, name: HTMLInputElement, age: HTMLInputElement) {
        this.emp.push(new Employee(parseInt(empid.value), name.value, parseInt(age.value)));
    }
    getStyleClass( age: number): string {
      return age < 20 ? 'bg-warning' : 'bg-success';
    }
}






