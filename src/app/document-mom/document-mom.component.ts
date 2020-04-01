import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { MeetingdataService } from '../../assets/shared/services/meetingdata.service';

@Component({
  selector: 'app-document-mom',
  templateUrl: './document-mom.component.html',
  styleUrls: ['./document-mom.component.scss'],
  providers: [NgbAccordionConfig]
})
export class DocumentMomComponent implements OnInit{
  active = 1;
  meridian = true;
  model: NgbDateStruct;
  meetingdtlTBL;
  sessionData;
  
  // disable = false;
  constructor( private metingdataService: MeetingdataService, private calendar: NgbCalendar, config: NgbAccordionConfig) {  
    config.closeOthers = true;
    config.type = 'info';
   }
  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  
  meetingDataForm = new FormGroup({
    meetingOwner: new FormControl(''),
    meetingName: new FormControl(''),
    meetingStartDate: new FormControl(''),
    meetingEndDate: new FormControl(''),
    meetingLocation: new FormControl(''),
    otherInformation: new FormControl(''),
    sessionData: new FormGroup(
      {
        sessionTopic:new FormControl(''),
        presenter:new FormControl(''),
        externalPresenter:new FormControl(''),
        sessionStartTime:new FormControl(''),
        sessionEndTime:new FormControl(''),
        meetingStartDate:new FormControl(''),
        internalParticipants:new FormGroup(
          {
          name:new FormControl(''), designation:new FormControl('')
          }),
        externalParticipants: new FormGroup(
          {
          name:new FormControl(''), extDesignation:new FormControl('')
          }),
        attachments:new FormControl(''),
        actionItems:new FormGroup({
          description: new FormControl(''), type:new FormControl(''), actionOwner:new FormControl(''), targetDate:new FormControl(''), priority:new FormControl(''), remarks:new FormControl('')
        })
      }
    ),
    
    });


  ngOnInit() {
    this.meetingdtlTBL = this.metingdataService.getMeetingData();
    this.sessionData = this.meetingdtlTBL.map(item => item.sessionData);
  
    console.log(this.sessionData);
  }

  addMoreDesc() {
    
  }
  
  onSubmit(){
      // this.metingdataService.addRecipe(this.meetingDataForm.value);
      this.metingdataService.addMeetingData(this.meetingDataForm.value);
      console.log(this.meetingDataForm.value);
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent) {
      console.log(changeEvent.activeId);
    }
    // if (changeEvent.nextId === 3) {
    //   changeEvent.preventDefault();
    // }
  }

    // onCancel() {
    //   this.router.navigate(['../'], {relativeTo: this.route});
    // }
  
}
