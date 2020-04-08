import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  paricipants = [
    {id: 1, name: 'Kaushal Ranpura - Manager - Corporate IT'},
    {id: 2, name: 'Kamal Shah - Manager - Products'},
    {id: 3, name: 'Avatar Singh - Manager - Corporate IT'},
    {id: 4, name: 'Sandesh - Manager - UI/UX'},
    {id: 5, name: 'Kunal Kapoor - Manager'}
];
  selectedCity: any;

  constructor() {

   }



  ngOnInit(): void {
  }

}
