import { TestBed } from '@angular/core/testing';

import { MeetingdataService } from '../assets/shared/services/meetingdata.service';

describe('MeetingdataService', () => {
  let service: MeetingdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
