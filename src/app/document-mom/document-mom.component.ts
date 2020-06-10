import { Component, OnInit, Injectable, Input  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbNavChangeEvent, NgbAccordionConfig, NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { MeetingdataService } from '../../assets/shared/services/meetingdata.service';
import { NavbarService } from '../../assets/shared/services/navbar.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Remarks</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body remarks">
      <div class="mt-2 table-responsive remarks-tbl">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th scope="col">Date / Time</th>
              <th scope="col">Name</th>
              <th scope="col">Remarks</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>25/5/2020,<br>
                10:51:17 AM</td>
              <td>Kalpesh Joshi</td>
              <td>Dummy Text</td>
            </tr>
            <tr>
              <td>28/5/2020,<br>
                11:00:00 AM</td>
              <td>Kaushal Ranpura</td>
              <td>Dummy Text</td>
            </tr>
            </tbody>
          </table>
        </div>
      
    </div>
  
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

@Component({
  selector: 'app-document-mom',
  templateUrl: './document-mom.component.html',
  styleUrls: ['./document-mom.component.scss'],
  providers: [NgbAccordionConfig,
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class DocumentMomComponent implements OnInit {

  active = 1;
  meridian = true;
  time = {hour: 13, minute: 30};
  model: NgbDateStruct;
  meetingdtlTBL;
  sessionData;
  internalParticipantsList: any;
  internalParticipants = [];
  Session2 = false;
  Clonerow = false;
  Subnav = false;
  // Subnav = false;
  // disable = false;
  constructor(
    private metingdataService: MeetingdataService,
    private calendar: NgbCalendar,
    private modalService: NgbModal,
    config: NgbAccordionConfig,
    public nav: NavbarService) {
      config.closeOthers = true;
      config.type = 'info';
   }
   open() {
    const modalRef = this.modalService.open(NgbdModalContent, { centered: true });
    modalRef.componentInstance.name = 'World';
  }

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

    // this.nav.hide();
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

  // functioin to show sidebar menu
  onClick() {
    // this.nav.newEvent(true);
    this.Subnav = true;
    this.Session2 = true;
    // this.nav.newEvent('clicked!');
    // document.getElementById("docMomNav").classList.toggle("show");
  }




onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent) {
      console.log(changeEvent.activeId);
      // document.querySelector('.nav-link').classList.add('success');

    }
    // if (changeEvent.nextId === 3) {
    //   changeEvent.preventDefault();
    // }
  }


    // onCancel() {
    //   this.router.navigate(['../'], {relativeTo: this.route});
    // }

}
