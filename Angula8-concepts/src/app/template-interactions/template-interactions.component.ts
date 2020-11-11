import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-interactions',
  template: `
    
    <div>
      <p>
          Split Two way binding  using [ngModel] and (ngModelChange) attribute :
      </p>
      <input type="text" placeholder="type prcv to get alert box" [ngModel]="userName" (ngModelChange)="showAlert($event)"  />
      
    </div>
    <div>
      <p>
          Two way binding Getters and Setters :
      </p>
      <input type="text" placeholder="type prcv to get alert box" [(ngModel)]="customerName"  />
      
    </div>
    <div>
      <p>
          Setting the focus on page load using ViewChild Decorator & ElementRef
      </p>
      <input #nameRef type="text" placeholder="Focus is enabled on loading the page" [(ngModel)]="name"  />
      
    </div>
  `,
  styles: []
})
export class TemplateInteractionsComponent implements OnInit {
  private userName: string;
  private _cname: string;
  private name: string;
  @ViewChild('nameRef', { static: false }) nameElementRef: ElementRef;
  constructor() { }
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }
  ngOnInit() {
  }

  public get customerName(): string {
    return this._cname
  }

  public set customerName(v: string) {
    this._cname = v;
    if (v === 'PRCV' || v === 'prcv') {
      alert("Hello " + v)
    }
  }


  showAlert = (event) => {
    console.log("textbox chaning: " + event)
    this.userName = event;
    if (event === 'PRCV' || event === 'prcv') {
      alert("Hello Prasanth")
    }
  }
}
