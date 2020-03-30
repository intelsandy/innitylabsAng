import { Component } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-mom',
  templateUrl: './document-mom.component.html',
  styleUrls: ['./document-mom.component.scss']
})
export class DocumentMomComponent {
  active = 1;
  // disable = false;
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent) {
      console.log(changeEvent.activeId);
    }
    // if (changeEvent.nextId === 3) {
    //   changeEvent.preventDefault();
    // }
  }
}
