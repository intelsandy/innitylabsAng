import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesOfMeetingsComponent } from './minutes-of-meetings.component';

describe('MinutesOfMeetingsComponent', () => {
  let component: MinutesOfMeetingsComponent;
  let fixture: ComponentFixture<MinutesOfMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutesOfMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesOfMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
