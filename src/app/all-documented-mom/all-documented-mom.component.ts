import { Component, OnInit } from '@angular/core';
import { MeetingdataService } from '../../assets/shared/services/meetingdata.service';

@Component({
  selector: 'app-all-documented-mom',
  templateUrl: './all-documented-mom.component.html',
  styleUrls: ['./all-documented-mom.component.scss']
})
export class AllDocumentedMomComponent implements OnInit {
  meetingdtlTBL: any;

  constructor(private service: MeetingdataService) {}

  ngOnInit(): void {
    this.meetingdtlTBL = this.service.getMeetingData();
  }

}
