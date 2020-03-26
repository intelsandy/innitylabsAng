import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minutes-of-meetings',
  templateUrl: './minutes-of-meetings.component.html',
  styleUrls: ['./minutes-of-meetings.component.scss']
})
export class MinutesOfMeetingsComponent implements OnInit {
  momdata: any;
  heading = 'Minutes of Meetings';

constructor() {
  this.momdata = [
    {
    department: 'Marketing Team Meeting',
    date : '28/02/2020',
    time : '10:15 am'
    },
    {
      department: 'Product Vertical Meeting',
      date : '27/02/2020',
      time : '4:35 pm'
    },
    {
      department: 'IT Infra Meeting',
      date : '26/02/2020',
      time : '2:30 pm'
    },
    {
      department: 'Product Vertical Meeting',
      date : '27/01/2020',
      time : '11:15 am'
    },
    {
      department: 'IT Infra Meeting',
      date : '26/01/2020',
      time : '5:45 pm'
    },
    {
      department: 'Marketing Team Meeting',
      date : '28/02/2020',
      time : '10:15 am'
    },
    {
      department: 'Product Vertical Meeting',
      date : '27/02/2020',
      time : '4:35 pm'
    },
    {
      department: 'IT Infra Meeting',
      date : '26/02/2020',
      time : '2:30 pm'
    },
    {
      department: 'Product Vertical Meeting',
      date : '27/01/2020',
      time : '11:15 am'
    },
    
    {
      department: 'Product Vertical Meeting',
      date : '27/01/2020',
      time : '11:15 am'
    },
    {
      department: 'IT Infra Meeting',
      date : '26/01/2020',
      time : '5:45 pm'
    },
    {
      department: 'Marketing Team Meeting',
      date : '28/02/2020',
      time : '10:15 am'
    },
    {
      department: 'Product Vertical Meeting',
      date : '27/02/2020',
      time : '4:35 pm'
    },
    {
      department: 'IT Infra Meeting',
      date : '26/02/2020',
      time : '2:30 pm'
    },
    {
      department: 'Product Vertical Meeting',
      date : '27/01/2020',
      time : '11:15 am'
    }
];
}

ngOnInit(): void {
}



}
