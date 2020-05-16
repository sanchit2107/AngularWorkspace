import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SANCHIT SINGHAL';
  image = '/assets/gcp.png';
  isDisable = true;
  isEdit = true;
  name = 'Sam';
  parentData: string = "Data from Parent Compoenet";
  childData: string;
  clickMe(): void {
    this.isEdit = false;
  }

  check() {
    if(this.name.length > 5) {
      this.isDisable = false;
    }
    else {
    this.isDisable = true;
    }
  }
  getData(value) {
   this.childData = value;
  }
}

