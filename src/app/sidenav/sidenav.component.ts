import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../assets/shared/services/navbar.service';
import { MeetingdataService } from 'src/assets/shared/services/meetingdata.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(public nav: NavbarService, private meetingDataService: MeetingdataService) { }
  sessionData = this.meetingDataService.getSessionData();


  ngOnInit(): void {
    this.nav.hide();
    // console.log(this.sessionData);
  }

}
