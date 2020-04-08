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
 
  subNav = this.nav.show();

  ngOnInit(): void {
    this.nav.hide();
    // console.log(this.sessionData);

    // console.log(this.subNav);
  }



}
