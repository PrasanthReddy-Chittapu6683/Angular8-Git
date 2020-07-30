import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  private name: string = "Prasanth"
  private message: string;

  constructor() { }

  ngOnInit() {
  }

}
