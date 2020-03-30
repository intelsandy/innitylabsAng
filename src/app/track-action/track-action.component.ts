import { Component, OnInit } from '@angular/core';
import { MeetingdataService } from '../meetingdata.service';

@Component({
  selector: 'app-track-action',
  templateUrl: './track-action.component.html',
  styleUrls: ['./track-action.component.scss']
})
export class TrackActionComponent implements OnInit {
  meetingdtlTBL: any;

  constructor(private service: MeetingdataService) {

   }

  ngOnInit(): void {
    this.meetingdtlTBL = this.service.getMeetingData();
  }

}
