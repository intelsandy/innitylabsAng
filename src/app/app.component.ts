import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'innitylabs';

  opened = true;

  toggleSidebar() {
    this.opened = !this.opened;
    document.querySelector("body").classList.toggle("sidenavClosed");
  }

}
