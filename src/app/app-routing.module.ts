import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenditureDetailComponent } from './expenditure-detail/expenditure-detail.component';
import { ExpendituresComponent } from './expenditures/expenditures.component';
import { AboutComponent } from './about/about.component';
//import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  //{ path: '', redirectTo: '/expenditures', pathMatch: 'full'}, // browsing to http://localhost:4200 ends up at http://localhost:4200/expenditures
  { path: 'expenditures/:autonomous_community/:year', component: ExpenditureDetailComponent },
  { path: 'expenditures', component: ExpendituresComponent },
  { path: 'about', component: AboutComponent },
  { path: 'index', component: IndexComponent }
  //{ path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
