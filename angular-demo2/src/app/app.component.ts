import { Component } from '@angular/core';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo2';
  msg: string;
  constructor(private serv : ProjectService) {
  }
  displayService() {
    this.msg = this.serv.serviceCall();
  }
}
