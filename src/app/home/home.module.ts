import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RegInputComponent } from './components/reg-input/reg-input.component';
import { SiteBenefitsComponent } from './components/site-benefits/site-benefits.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerReviewsComponent } from './components/reviews/reviews.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';

const routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    RegInputComponent,
    SiteBenefitsComponent,
    AboutComponent,
    CustomerReviewsComponent,
    AboutMoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
