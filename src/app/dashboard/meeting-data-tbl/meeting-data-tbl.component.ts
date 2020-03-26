import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-data-tbl',
  templateUrl: './meeting-data-tbl.component.html',
  styleUrls: ['./meeting-data-tbl.component.scss']
})
export class MeetingDataTblComponent implements OnInit {

  momDataTbl: any;

  constructor() { 
    this.momDataTbl = [
      {
      MeetingTitle: 'Design Thinking Workshop',
      Duedate : 'today',
      Priority : 'High',
      Status: 'Open',
      Action: 'Update'
      },
      {
      MeetingTitle: 'UX Sitemap Discussion',
      Duedate : 'today',
      Priority : 'High',
      Status: 'Open',
      Action: 'Update'
      },
      {
      MeetingTitle: 'Managed Hosting',
      Duedate : '24/03/2020',
      Priority : 'High',
      Status: 'Open',
      Action: 'Update'
    },
    {
    MeetingTitle: 'Icon Design Discussion',
    Duedate : '24/03/2020',
    Priority : 'Medium',
    Status: 'Open',
    Action: 'Update'
    },
    {
    MeetingTitle: 'Frontend Development update',
    Duedate : '24/03/2020',
    Priority : 'Low',
    Status: 'Open',
    Action: 'Update'
    }
  ];
  }

  ngOnInit(): void {
  }

}
