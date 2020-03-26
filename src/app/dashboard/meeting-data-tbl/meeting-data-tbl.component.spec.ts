import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDataTblComponent } from './meeting-data-tbl.component';

describe('MeetingDataTblComponent', () => {
  let component: MeetingDataTblComponent;
  let fixture: ComponentFixture<MeetingDataTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingDataTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingDataTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
