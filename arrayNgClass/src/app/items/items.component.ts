import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 @Input() name1:string;
 @Output() evt : EventEmitter<String>=new EventEmitter();
 outputString:string="This is data from child";
  constructor() { }

  ngOnInit(): void {
  }
  sendData() {
    this.evt.emit(this.outputString);
  }
}
