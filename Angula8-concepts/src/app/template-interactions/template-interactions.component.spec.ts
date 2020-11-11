import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInteractionsComponent } from './template-interactions.component';

describe('TemplateInteractionsComponent', () => {
  let component: TemplateInteractionsComponent;
  let fixture: ComponentFixture<TemplateInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
