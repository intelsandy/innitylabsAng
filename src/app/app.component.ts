import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  constructor(private spinner: NgxSpinnerService) {}

  title = 'innitylabs';
  items = Array.from({length: 1000}, (v, k) => k + 1);
  opened = true;

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  toggleSidebar() {
    this.opened = !this.opened;
    document.querySelector("body").classList.toggle("sidenavClosed");
    document.querySelector("ng-sidebar > aside").classList.toggle("open");
  }



}
