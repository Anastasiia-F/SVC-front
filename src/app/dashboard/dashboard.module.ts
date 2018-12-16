import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReportsService } from './services/reports.service';
import { LayoutComponent } from './components/layout/layout.component';
import { TopCheckComponent } from './components/top-check/top-check.component';
import { ResultTabsComponent } from './components/result-tabs/result-tabs.component';
import { ResultSummaryComponent } from './components/result-summary/result-summary.component';

const routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [LayoutComponent, TopCheckComponent, ResultTabsComponent, ResultSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    ReportsService
  ]
})
export class DashboardModule { }
