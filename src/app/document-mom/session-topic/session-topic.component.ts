import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-topic',
  templateUrl: './session-topic.component.html',
  styleUrls: ['./session-topic.component.scss']
})
export class SessionTopicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  sessionDataForm = new FormGroup({
      meetingOwner: new FormControl(''),
      meetingTitle: new FormControl(''),
      meetingStartDate: new FormControl(''),
      meetingEndDate: new FormControl(''),
      meetingLocation: new FormControl(''),
      sessionData: new FormGroup(
        {
          sessionId: new FormControl(''),
          sessionTopic:new FormControl(''),
          presenter:new FormControl(''),
          externalPresenter:new FormControl(''),
          meetingDate:new FormControl(''),
          sessionStartTime:new FormControl(''),
          sessionEndTime:new FormControl(''),
          internalParticipants:new FormGroup(
            {
            name:new FormControl(''), designation:new FormControl('')
            }),
          externalParticipants: new FormGroup(
            {
            name:new FormControl(''), designation:new FormControl('')
            }),
          attachment:new FormControl(''),          
        }
      ),
      actionItems:new FormGroup({
          description: new FormControl(''), type:new FormControl(''), actionOwner:new FormControl(''), targetDate:new FormControl(''), priority:new FormControl(''), remarks:new FormControl('')
        })
      });
}
