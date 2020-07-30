import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallsComponent } from './http-calls.component';

describe('HttpCallsComponent', () => {
  let component: HttpCallsComponent;
  let fixture: ComponentFixture<HttpCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
