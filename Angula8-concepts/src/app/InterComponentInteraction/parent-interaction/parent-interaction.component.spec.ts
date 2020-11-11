import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInteractionComponent } from './parent-interaction.component';

describe('ParentInteractionComponent', () => {
  let component: ParentInteractionComponent;
  let fixture: ComponentFixture<ParentInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
