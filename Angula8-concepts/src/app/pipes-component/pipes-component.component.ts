import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.scss']
})
export class PipesComponentComponent implements OnInit {

  private pipeValue: string = "Hi Am Prasanth"
  public dateVal = new Date();
  constructor() { }

  ngOnInit() {
  }

}
