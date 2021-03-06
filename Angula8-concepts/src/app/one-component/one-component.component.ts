import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.scss']
})
export class OneComponentComponent implements OnInit {

  private text: string;
  private id: string;
  private successClass: string;
  private errorClass: string;
  private isDisabled: boolean;
  private isDisableds: boolean;
  private tempalteRefVariable: string;
  public name = "Prasanth";
  constructor() { }

  ngOnInit() {
    this.text = " 'Displaying this text using Interploation'"
    this.id = "myID"
    this.isDisabled = true;
    this.successClass = "success"
    this.errorClass = "error";
  }

  dispalyText = () => {
    return " Assigments are not possible with in curlly braces ";
  }
  disbaledCheckbox = () => {
    this.isDisabled = !this.isDisabled;
  }
  logMessage = (val: string) => {
    this.tempalteRefVariable = val;
  }
}
