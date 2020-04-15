import { NotificationService } from './notification.service';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidebarModule } from 'ng-sidebar';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MinutesOfMeetingsComponent } from './dashboard/minutes-of-meetings/minutes-of-meetings.component';
import { MeetingDataTblComponent } from './dashboard/meeting-data-tbl/meeting-data-tbl.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DocumentMomComponent } from './document-mom/document-mom.component';
import { AllDocumentedMomComponent } from './all-documented-mom/all-documented-mom.component';
import { TrackActionComponent } from './track-action/track-action.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeetingdataService } from 'src/assets/shared/services/meetingdata.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import { WebsiteDiscussionComponent } from './track-action/website-discussion/website-discussion.component';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NavbarService } from 'src/assets/shared/services/navbar.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NotificationsComponent } from './notifications/notifications.component';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION} from 'ngx-ui-loader';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5 // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    SearchBarComponent,
    DashboardComponent,
    MinutesOfMeetingsComponent,
    MeetingDataTblComponent,
    PieChartComponent,
    DocumentMomComponent,
    AllDocumentedMomComponent,
    TrackActionComponent,
    AboutComponent,
    FileUploadComponent,
    WebsiteDiscussionComponent,
    AutocompleteComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    SidebarModule.forRoot(),
    // PeoplePickerModule.forRoot(),
    NgbModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    ScrollingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    NgSelectModule,
    NgxSpinnerModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MeetingdataService, NavbarService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
