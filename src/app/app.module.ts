import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { NavbarComponent } from './header/navbar/navbar.component';

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
