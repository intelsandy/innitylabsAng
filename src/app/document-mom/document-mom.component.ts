import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {NgbCalendar, NgbDate, NgbDateStruct, NgbNavChangeEvent, NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { MeetingdataService } from '../../assets/shared/services/meetingdata.service';
import { NavbarService } from '../../assets/shared/services/navbar.service';


@Component({
  selector: 'app-document-mom',
  templateUrl: './document-mom.component.html',
  styleUrls: ['./document-mom.component.scss'],
  providers: [NgbAccordionConfig]
})
export class DocumentMomComponent implements OnInit {



  // disable = false;
  constructor(
    private metingdataService: MeetingdataService,
    private calendar: NgbCalendar,
    config: NgbAccordionConfig,
    public nav: NavbarService) {
      config.closeOthers = true;
      config.type = 'info';
   }
   
   onClick() {
    this.nav.newEvent('clicked!');
    this.Subnav = true;
  }

  active = 1;
  meridian = true;
  model: NgbDateStruct;
  meetingdtlTBL;
  sessionData;
  internalParticipantsList: any;
  internalParticipants = [];
  Session2 = false;
  Clonerow = false;


  public meetingDataEdit = [
    {
      details: 'Session Topic 1 - Design Thinking Workshop',
      presenter: 'John Pinto',
      meetaingDate: '22/03/2020',
      sessionStartTime: '10:00 AM',
      sessionEndTime: '6:30 PM',
      InternalParticipants: 'View',
      externalParticipants: 'View',
      attachement: 'UI-structure.docx'
    }
  ];


  meetingDataForm = new FormGroup({
    meetingOwner: new FormControl(''),
    meetingName: new FormControl(''),
    meetingStartDate: new FormControl(''),
    meetingEndDate: new FormControl(''),
    meetingLocation: new FormControl(''),
    otherInformation: new FormControl(''),
    sessionData: new FormGroup(
      {
        sessionTopic: new FormControl(''),
        presenter: new FormControl(''),
        externalPresenter: new FormControl(''),
        sessionStartTime: new FormControl(''),
        sessionEndTime: new FormControl(''),
        meetingStartDate: new FormControl(''),
        internalParticipants: new FormGroup(
          {
          name: new FormControl(''), designation: new FormControl('')
          }),
        externalParticipants: new FormGroup(
          {
          name: new FormControl(''), extDesignation: new FormControl('')
          }),
        attachments: new FormControl(''),
        actionItems: new FormGroup({
          description: new FormControl(''),
          type: new FormControl(''),
           actionOwner: new FormControl(''),
          targetDate: new FormControl(''),
          priority: new FormControl(''),
          remarks: new FormControl('')
        })
      }
    )
    });
  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  // type: ['email', Validators.compose([Validators.required])], // i.e Email, Phone


  // method triggered when form is submitted
  submit() {
    console.log(this.meetingDataForm.value);
  }


  ngOnInit() {
    this.meetingdtlTBL = this.metingdataService.getMeetingData();
    this.sessionData = this.metingdataService.getSessionData();
    this.internalParticipantsList = this.sessionData.map(item => {
      for (let i = 0; i < item.length; i++) {
        this.internalParticipants.push({name: item[i].internalParticipants[i].name,
        designation: item[i].internalParticipants[i].designation});
      }
    });
    // console.log(this.internalParticipants);

    //this.nav.hide();
  }



  addrow() {
    this.Clonerow = true;
  }

  addSession() {
    this.Session2 = true;
  }

  onSubmit() {
      // this.metingdataService.addRecipe(this.meetingDataForm.value);
      this.metingdataService.addMeetingData(this.meetingDataForm.value);
      console.log(this.meetingDataForm.value);
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent) {
      console.log(changeEvent.activeId);
      //document.querySelector('.nav-link').classList.add('success');

    }
    // if (changeEvent.nextId === 3) {
    //   changeEvent.preventDefault();
    // }
  }


    // onCancel() {
    //   this.router.navigate(['../'], {relativeTo: this.route});
    // }

}
