import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFunctionalityComponent } from './grid-functionality.component';

describe('GridFunctionalityComponent', () => {
  let component: GridFunctionalityComponent;
  let fixture: ComponentFixture<GridFunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
