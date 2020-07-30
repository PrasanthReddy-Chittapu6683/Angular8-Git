import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
  private departmentList = [

    { id: 1, name: 'Angular' },
    { id: 2, name: 'ReactJs' },
    { id: 3, name: 'VuJs' },
    { id: 4, name: 'Asp.Net MVC' },
    { id: 5, name: 'MS Azure' },
    { id: 6, name: 'AWS' },
  ];
  private selectedID;
  private selectedClass = "liSelected"
  private notSelectedClass = "liNotSelected"
  constructor(private _router: Router, private _activeedRouter: ActivatedRoute) { }

  onSelect = (dept) => {
    this._router.navigate(['/routingParams', dept.id])
  }

  ngOnInit() {
    this._activeedRouter.paramMap.subscribe((params: ParamMap) => {
      this.selectedID = parseInt(params.get('id'));
    })
    // this.selectedID = parseInt(this._activeedRouter.snapshot.paramMap.get('id'));
  }
  isSelected = (dept) => {
    return dept.id === this.selectedID;
  }

}
