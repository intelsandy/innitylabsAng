import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
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
  internalParticipantsList: any;
  internalParticipants = [];
  

  // disable = false;
  constructor( private metingdataService: MeetingdataService, private calendar: NgbCalendar, config: NgbAccordionConfig, private fb: FormBuilder) {  
    config.closeOthers = true;
    config.type = 'info';
   }
  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;


  public form: FormGroup;
  public contactList: FormArray;

  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }
  
  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      type: ['email', Validators.compose([Validators.required])], // i.e Email, Phone
      name: [null, Validators.compose([Validators.required])], // i.e. Home, Office
      value: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  // add a contact form group
  addContact() {
    this.contactList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.contactList.removeAt(index);
  }

  // triggered to change validation of value field type
  changedFieldType(index) {
    let validators = null;

    if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
      validators = Validators.compose([Validators.required, Validators.email]);
    } else {
      validators = Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp('^\\+[0-9]?()[0-9](\\d[0-9]{9})$')) // pattern for validating international phone number
      ]);
    }

    this.getContactsFormGroup(index).controls['value'].setValidators(
      validators
    );

    this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  }

  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }

  
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
    )    
    });


  ngOnInit() {
    this.meetingdtlTBL = this.metingdataService.getMeetingData();
    this.sessionData = this.meetingdtlTBL.map(item => item.sessionData);
    this.internalParticipantsList = this.sessionData.map(item => {
      for (let i = 0; i < item.length; i++){
        this.internalParticipants.push({name: item[i].internalParticipants[i].name, designation: item[i].internalParticipants[i].designation})
      }
    });
    console.log(this.internalParticipants);

    
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      organization: [null],
      contacts: this.fb.array([this.createContact()])
    });

    // set contactlist to this field
    this.contactList = this.form.get('contacts') as FormArray;
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
