import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubnavService {
  Subnav = false;

  constructor() { }

  // functioin to show sidebar menu
  onClick() {
    this.Subnav.newEvent('clicked!');
    this.Subnav = true;
  }
}
