import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDocumentedMomComponent } from './all-documented-mom.component';

describe('AllDocumentedMomComponent', () => {
  let component: AllDocumentedMomComponent;
  let fixture: ComponentFixture<AllDocumentedMomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDocumentedMomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDocumentedMomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
