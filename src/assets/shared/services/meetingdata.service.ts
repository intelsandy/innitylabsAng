import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingdataService {
  constructor() { }


  private meetingData = [
    {
      id: 1,
      meetingOwner: 'John Pinto',
      meetingTitle: 'Website Discussion',
      meetingStartDate: '22/03/2020',
      meetingEndDate: '22/03/2020',
      meetingLocation: 'Blur Board Ground Floor',
      otherInformation: 'Working Lunch',
      sessionData: [
        {
          id: 1,
          sessionId: 1,
          sessionTopic: 'Design Thinking Workshop',
          presenter: 'John Pinto',
          externalPresenter: 'Sandesh K',
          meetingDate: '22/03/2020',
          sessionStartTime: '10:00 AM',
          sessionEndTime: '06:30 PM',
          internalParticipants:
          [
            {
            name: 'Kaushal Ranpura', designation: 'Manager - Corporate IT'
            },
            {
            name: 'Kamal Shah', designation: 'Manager - Products'
            }
          ],
          externalParticipants:
          [
            {
            name: 'Kaushal Ranpura', designation: 'Manager - Corporate IT'
            },
            {
            name: 'Kamal Shah', designation: 'Manager - Products'
            }
          ],
          attachment: 'uxui-sitemap.docx',
          actionItems:
            [
              {
                id: 1,
                description: 'Lorem Ipsum Dummy Text',
                type: 'Action',
                actionOwner: 'Kaushal Ranpura',
                targetDate: '26/03/2020',
                priority: 'High',
                remarks: 'Lorem Ipsum Dummy Text'
              },
              {
                id: 2,
                description: 'Lorem Ipsum Dummy Text',
                type: 'Action',
                actionOwner: 'Kaushal Ranpura',
                targetDate: '26/03/2020',
                priority: 'High',
                remarks: 'Lorem Ipsum Dummy Text'
              },
              {
                id: 3,
                description: 'Lorem Ipsum Dummy Text',
                type: 'Information',
                actionOwner: 'Kaushal Ranpura',
                targetDate: '26/03/2020',
                priority: 'High',
                remarks: 'Lorem Ipsum Dummy Text'
              }
            ],
        },
        {
          id: 2,
          sessionId: 2,
          sessionTopic: 'US Sitemap Discussion',
          presenter: '',
          externalPresenter: '',
          meetingDate: '',
          sessionStartTime: '',
          sessionEndTime: '',
          internalParticipants:
          [
            {
            name: 'Kaushal Ranpura',
            designation: 'Manager - Corporate IT'
            },
            {
            name: 'Kamal Shah',
            designation: 'Manager - Products'
            }
          ],
          externalParticipants:
          [
            {
            name: 'Kaushal Ranpura',
            designation: 'Manager - Corporate IT'
            },
            {
            name: 'Kamal Shah',
            designation: 'Manager - Products'
            }
          ],
          attachment: '',
          actionItems:
            [
              {
                id: 1,
                description: 'Lorem Ipsum Dummy Text',
                type: 'Action',
                actionOwner: 'Kaushal Ranpura',
                targetDate: '26/03/2020',
                priority: 'High',
                remarks: 'Lorem Ipsum Dummy Text'
              }
            ],
        }
      ],

    },
    {
      id: 2,
      meetingOwner: 'Sam Pinto',
      meetingTitle: 'Information',
      meetingStartDate: '22/03/2020',
      meetingEndDate: '22/03/2020',
      meetingLocation: 'Blur Board Ground Floor',
      otherInformation: 'Working Lunch',
      sessionData: [
        {
          id: 1,
          sessionId: 1,
          sessionTopic: 'ABC',
          presenter: 'XYZ',
          externalPresenter: '',
          meetingDate: '',
          sessionStartTime: '',
          sessionEndTime: '',
          internalParticipants:
          [
            {
            name: 'Kaushal Ranpura',
            designation: 'Manager - Corporate IT'
            },
            {
            name: 'Kamal Shah',
            designation: 'Manager - Products'
            }
          ],
          externalParticipants:
          [
            {
            name: 'Kaushal Ranpura',
            designation: 'Manager - Corporate IT'
            },
            {
            name: 'Kamal Shah',
            designation: 'Manager - Products'
            }
          ],
          attachment: 'UI-structure.docx',
          actionItems:
            [
              {
                id: 1,
                description: 'Lorem Ipsum Dummy Text',
                type: 'Action',
                actionOwner: 'Kaushal Ranpura',
                targetDate: '26/03/2020',
                priority: 'High',
                remarks: 'Lorem Ipsum Dummy Text'
              }
            ],
        },

      ]
    }
  ];


  getMeetingData() {
    return this.meetingData.slice();
  }
  addMeetingData(meetingData) {
    return this.meetingData.push(meetingData);
  }
  getSessionData() {
      return this.meetingData.map(item => item.sessionData).slice();
  }
}
