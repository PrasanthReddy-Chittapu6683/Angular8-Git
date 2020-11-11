import { Component, OnInit } from '@angular/core';
import { ChildInteractionComponent } from '../child-interaction/child-interaction.component'
@Component({
  selector: 'app-parent-interaction',
  template: `
    <i>
      parent-interaction works!
    </i>
  <p> Using @Input decorator: Setting userLogin to true/false in Parent Component and displaying  below messgaes in Child Component</p>
  

  <p> Using Getter & Setter decorator: Setting gsLoggedIn to true/false in Parent Component by clicking on Login and Loggout buttons and displaying  below messgaes in Child Component</p>
    
  <button (click)="login()">   Login </button>
  <button (click)="logout()">   LogOut </button>
  
  
  <br> 
  <app-child-interaction [gsLoggedIn]="userLoginUser" [loggedIn]="userLogin" ></app-child-interaction>

    
  `,
  styles: []
})
export class ParentInteractionComponent implements OnInit {
  userLogin = false;
  userLoginUser: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  login = () => {
    this.userLoginUser = true;
  }
  logout = () => {
    this.userLoginUser = false;

  }
}
