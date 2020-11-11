import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInteractionComponent } from './child-interaction.component';

describe('ChildInteractionComponent', () => {
  let component: ChildInteractionComponent;
  let fixture: ComponentFixture<ChildInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
