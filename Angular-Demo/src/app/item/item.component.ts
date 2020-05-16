import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() name1: string;
  @Output() evt: EventEmitter<string> =  new  EventEmitter<string>();
  outputString








    : string = "This is a data from Child";
  constructor() { }

  ngOnInit(): void {
  }
  sendData() {
    this.evt.emit(this.outputString);
  }
}
