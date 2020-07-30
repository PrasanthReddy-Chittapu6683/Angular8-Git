import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  private ngifFlag: boolean = false;
  private color: string = "";
  public colors: any[];
  constructor() { }

  ngOnInit() {
    this.colors = ["red", "green", "yellow", "blue"];
  }
  ngIfclick = () => {
    this.ngifFlag = !this.ngifFlag;
  }
  ngswtichClick = (val) => {
    this.color = val ? val : "";
  }
}
