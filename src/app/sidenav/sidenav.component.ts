import { MeetingdataService } from 'src/assets/shared/services/meetingdata.service';
import { NavbarService } from './../../assets/shared/services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(public nav: NavbarService, private meetingDataService: MeetingdataService) { }
  sessionData = this.meetingDataService.getSessionData();



  ngOnInit(): void {
    // this.nav.hide();
    // console.log(this.sessionData);

    this.nav.events$.forEach(event => console.log(event));
  }



}
