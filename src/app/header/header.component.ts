import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  opened = true;

  toggleSidebar() {
    this.opened = !this.opened;
    document.querySelector("body").classList.toggle("sidenavClosed");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
