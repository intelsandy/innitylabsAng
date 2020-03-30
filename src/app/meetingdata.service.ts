import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingdataService {

  getMeetingData() {
    return [
      {
        meetingOwner: 'John Pinto',
        meetingTitle: 'Website Discussion',
        meetingStartDate: '22/03/2020',
        meetingEndDate: '22/03/2020',
        meetingLocation: 'Blur Board Ground Floor',
        actionView: 'View',
        actionEdit: 'Edit'
      },
      {
        meetingOwner: 'Ram Sen',
        meetingTitle: 'Infra Update',
        meetingStartDate: '23/03/2020',
        meetingEndDate: '23/03/2020',
        meetingLocation: 'Conference Room',
        actionView: 'View',
        actionEdit: 'Edit'
      },
      {
        meetingOwner: 'Neeta Chauhan',
        meetingTitle: 'Design Thinking',
        meetingStartDate: '24/03/2020',
        meetingEndDate: '24/03/2020',
        meetingLocation: 'Board Room 1st Floor',
        actionView: 'View',
        actionEdit: 'Edit'
      },
      {
        meetingOwner: 'Shilpa Rao',
        meetingTitle: 'Intram Meeting Update',
        meetingStartDate: '25/03/2020',
        meetingEndDate: '25/03/2020',
        meetingLocation: 'Blur Board Ground Floor',
        actionView: 'View',
        actionEdit: 'Edit'
      }
    ];
  }
  constructor() { }
}
