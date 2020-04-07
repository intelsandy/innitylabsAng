import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'innitylabs';
  items = Array.from({length: 1000}, (v, k) => k + 1);
  opened = true;


  toggleSidebar() {
    this.opened = !this.opened;
    document.querySelector("body").classList.toggle("sidenavClosed");
  }


}
