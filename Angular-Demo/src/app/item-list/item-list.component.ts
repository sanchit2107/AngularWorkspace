import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  names:string[];
  constructor() {

    this.names= ['Riya', 'Osho', 'Sanchit', 'Piyush'];
   }

  ngOnInit(): void {
  }

}
