import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponentComponent } from './pipes-component.component';

describe('PipesComponentComponent', () => {
  let component: PipesComponentComponent;
  let fixture: ComponentFixture<PipesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
