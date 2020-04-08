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
  subNav = false;

  //this.subNav = this.nav.events$.forEach(event => event);

  ngOnInit(): void {
    this.nav.hide();
    // console.log(this.sessionData);
    // console.log(this.subNav);

    this.nav.events$.forEach(event => console.log(event));
  }

  // toggleMenu() {
  //   let menuBox = document.getElementById('menuBox');
  //   if (menuBox.style.display == 'none') { // if is menuBox displayed, hide it
  //     menuBox.style.display = 'block';
  //   } else { // if is menuBox hidden, display it
  //     menuBox.style.display = 'none';
  //   }
  // }

}
