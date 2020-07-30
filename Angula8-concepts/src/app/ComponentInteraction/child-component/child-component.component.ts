import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input('parentData') public ChildName;
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  SendData = () => {
    this.childEvent.emit("Hey am coming from Child Component")
  };

}
