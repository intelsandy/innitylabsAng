
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentMomComponent } from './document-mom/document-mom.component';
import { AllDocumentedMomComponent } from './all-documented-mom/all-documented-mom.component';
import { TrackActionComponent } from './track-action/track-action.component';
import { WebsiteDiscussionComponent } from './track-action/website-discussion/website-discussion.component';
import { AboutComponent } from './about/about.component';
import { NotificationsComponent } from './notifications/notifications.component';
// import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'document-mom', component: DocumentMomComponent },
  // { path: 'document-mom/session-topic', component: SessionTopicComponent },
  // { path: 'document-mom/meeting-summary', component: MeetingSummaryComponent },
  { path: 'all-documented-mom', component: AllDocumentedMomComponent },
  { path: 'track-action', component: TrackActionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'track-action/website-discussion', component: WebsiteDiscussionComponent },
  { path: 'notifications', component: NotificationsComponent }
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
