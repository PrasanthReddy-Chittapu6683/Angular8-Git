import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-interaction',
  template: `
    <i> child-interaction works! </i>
 <br>
    <span *ngIf="loggedIn"> Welcome Back !!</span>
    <span *ngIf="!loggedIn"> Login please </span>
 <br>

   {{message}}
  `,
  styles: []
})
export class ChildInteractionComponent implements OnInit {
  @Input() loggedIn;
  message: string;
  private _gsLoggedIn: boolean;

  public get gsLoggedIn(): boolean {
    return this._gsLoggedIn
  }

  @Input()
  public set gsLoggedIn(v: boolean) {
    this._gsLoggedIn = v;
    if (v == true) {
      this.message = "Welcome Back"
    } else {
      this.message = "Login Please !!"
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
