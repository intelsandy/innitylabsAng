import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentMomComponent } from './document-mom/document-mom.component';
// import { AboutComponent } from './about/about.component';


const routes: Routes = [  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'document-mom', component: DocumentMomComponent }
  // { path: 'about', component: AboutComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
