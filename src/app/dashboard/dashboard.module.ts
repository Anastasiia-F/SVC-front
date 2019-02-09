import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsService } from '../core/services/reports.service';
import { LayoutComponent } from './components/layout/layout.component';

const routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ReportsService
  ]
})
export class DashboardModule { }
