import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComponentComponent } from './one-component.component';

describe('OneComponentComponent', () => {
  let component: OneComponentComponent;
  let fixture: ComponentFixture<OneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
