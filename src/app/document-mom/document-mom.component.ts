import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MeetingdataService } from '../meetingdata.service';

@Component({
  selector: 'app-document-mom',
  templateUrl: './document-mom.component.html',
  styleUrls: ['./document-mom.component.scss']
})
export class DocumentMomComponent implements OnInit{
  active = 1;
  // disable = false;
  constructor( private metingdataService: MeetingdataService) {   }
  ngOnInit() {
  }
  
  onSubmit(){
      this.metingdataService.addRecipe(this.meetingDataForm.value);
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
  
    meetingDataForm = new FormGroup({
        MeetingOwner: new FormControl('', [Validators.required]),
        MeetingName: new FormControl('', [Validators.required]),
        MeetingStartDate: new FormControl('', [Validators.required]),
        MeetingEndDate: new FormControl('', [Validators.required]),
        MeetingLocaltion: new FormControl('', [Validators.required]),
        OtherInformation: new FormControl(''),
      });


}
