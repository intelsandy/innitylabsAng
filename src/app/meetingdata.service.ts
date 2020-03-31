import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingdataService {  
  constructor() { }

  private meetingData = [
    {
      id:1,
      meetingOwner: 'John Pinto',
      meetingTitle: 'Website Discussion',
      meetingStartDate: '22/03/2020',
      meetingEndDate: '22/03/2020',
      meetingLocation: 'Blur Board Ground Floor',
      sessionData: [
        {
          id:1,
          sessionId:1,
          sessionTopic:"",
          presenter:"",
          externalPresenter:"",
          meetingDate:"",
          sessionStartTime:"",
          sessionEndTime:"",
          internalParticipants:
          [
            {
            name:"Kaushal Ranpura", designation:"Manager - Corporate IT"
            },
            {
            name:"Kamal Shah", designation:"Manager - Products"
            }
          ],
          externalParticipants:
          [
            {
            name:"Kaushal Ranpura", designation:"Manager - Corporate IT"
            },
            {
            name:"Kamal Shah", designation:"Manager - Products"
            }
          ],
          attachment:"",          
        }
      ],
      actionItems:
      [
        {
          id:1, description:"", type:['Action', 'Information'], actionOwner:"", targetDate:"", priority:['High', 'Low', 'Normal', 'Medium'], remarks:""
        }
      ],
      
    },
    {
      id:2,
      meetingOwner: 'John Pinto',
      meetingTitle: 'Website Discussion',
      meetingStartDate: '22/03/2020',
      meetingEndDate: '22/03/2020',
      meetingLocation: 'Blur Board Ground Floor',
      sessionData: [
        {
          id:1,
          sessionId:1,
          sessionTopic:"",
          presenter:"",
          externalPresenter:"",
          meetingDate:"",
          sessionStartTime:"",
          sessionEndTime:"",
          internalParticipants:
          [
            {
            name:"Kaushal Ranpura", designation:"Manager - Corporate IT"
            },
            {
            name:"Kamal Shah", designation:"Manager - Products"
            }
          ],
          externalParticipants:
          [
            {
            name:"Kaushal Ranpura", designation:"Manager - Corporate IT"
            },
            {
            name:"Kamal Shah", designation:"Manager - Products"
            }
          ],
          attachment:"",          
        }
      ],
      actionItems:
      [
        {
          id:1, description:"", type:['Action', 'Information'], actionOwner:"", targetDate:"", priority:['High', 'Low', 'Normal', 'Medium'], remarks:""
        }
      ],
      
    }
  ];

  getMeetingData() {
    return this.meetingData.slice();
  }
}
