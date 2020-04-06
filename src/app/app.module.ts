
import { DocumentMomService } from './../assets/shared/services/document-mom.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
import { SessionTopicComponent } from './document-mom/session-topic/session-topic.component';
import { RightTopBarComponent } from './header/right-top-bar/right-top-bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import { WebsiteDiscussionComponent } from './track-action/website-discussion/website-discussion.component';
import { MeetingSummaryComponent } from './document-mom/meeting-summary/meeting-summary.component';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { NgSelectModule } from '@ng-select/ng-select';

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
    SessionTopicComponent,
    RightTopBarComponent,
    FileUploadComponent,
    WebsiteDiscussionComponent,
    MeetingSummaryComponent,
    AutocompleteComponent
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
    NgSelectModule
  ],
  providers: [MeetingdataService, DocumentMomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
