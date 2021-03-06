import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class NavbarService {

    visible: boolean;


    private _subject = new Subject<boolean>();

    newEvent(event) {
      this._subject.next(event);
    }

    get events$ () {
      return this._subject.asObservable();
    }

    constructor() { /*this.visible = false;*/ }

    hide() { this.visible = false; }

    show() { this.visible = true; }

}
