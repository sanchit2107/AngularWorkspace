import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  arr: string[];
  arr: [{"name":"Sanchit", "age":21}, {"name":"Osho", "age":23}, {"name":"Piyush", "age":25}];
  constructor() { }

  serviceCall():string {
    return 'This is call from Service';
  }

}
