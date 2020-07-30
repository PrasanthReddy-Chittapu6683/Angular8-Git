import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-departments-details',
  template: `
    <p>
      departments-details works!
    </p>
    <h3>Selected ID is : {{depID}}</h3>
    <p>This we are commenting because we are going to use paramMpa function which helpt to reinitize the same component on clicking Prev and Next buttons</p>
    <button type="button" (click)="goBack()"> Back </button>
    <br>

    <p> paramMap Observables </p>
    <button type="button" (click)="goPrev()"> Prev </button>
    <button type="button" (click)="goNext()"> Next </button>
    <br>
    <p> Optional Route Parameters </p>
    <button type="button" (click)="goDepartments()"> Goto Departments using Optional Route Parameters </button>

    <p>Child Routing</p>
    <span> Click Below buttons to load component using Child route </span>
    <br>
    <button type="button" (click)="showOverview()"> Overview</button>
    <button type="button" (click)="showContact()"> Contact </button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DepartmentsDetailsComponent implements OnInit {
  private depID: number;
  constructor(private _router: Router, private _activeedRouter: ActivatedRoute) { }

  ngOnInit() {
    // this.depID = parseInt(this._activeedRouter.snapshot.paramMap.get('id'));// This we are commenting because we are going to use paramMpa function which helpt to reinitize the same component on clicking Prev and Next buttons
    this._activeedRouter.paramMap.subscribe((params: ParamMap) => {
      this.depID = parseInt(params.get('id'));
    })
  }
  goBack = () => {
    this._router.navigate(['/routingParams'])
  }
  goDepartments = () => {
    let selectedID = this.depID ? this.depID : null;
    this._router.navigate(['/routingParams', { id: selectedID }])
  }
  goPrev = () => {
    if (this.depID > 0) {

      this._router.navigate(['/routingParams', this.depID - 1])
    }
  }
  goNext = () => {
    if (this.depID > 0) {
      this._router.navigate(['/routingParams', this.depID + 1])
    }
  }
  showContact = () => {
    this._router.navigate(['contact'], { relativeTo: this._activeedRouter })
  }
  showOverview = () => {
    this._router.navigate(['overview'], { relativeTo: this._activeedRouter })
  }
}
