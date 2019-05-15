import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsService } from '../core/services/reports.service';
import { SharedModule} from "../shared/shared.module";
import { LayoutComponent } from './components/layout/layout.component';
import { BatteryData } from './components/battery/battery.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { CheckResultsComponent } from './components/check-results/check-results.component';
import { SpecComponent } from './components/spec/spec.component';
import { EconomyComponent } from './components/economy/economy.component';
import { ValuationComponent } from './components/valuation/valuation.component';
import { MotHistoryComponent } from './components/mot-history/mot-history.component';
import { MileageComponent } from './components/mileage/mileage.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { CheckDataParserComponent } from './components/check-icon/check-data-parser.component';
import { DataParserService } from "../core/services/data-parser.service";
import {TextSeparatorService} from "../core/services/text-separator.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableInfoParserComponent } from './components/table-info-parser/table-info-parser.component';

const routes = [{
    path: '',
    component: ReportsListComponent,
},
{
    path:':id',
    component: LayoutComponent,
    children: [
        {
            path: '',
            redirectTo: 'battery',
            pathMatch: 'full'
        },
        {
            path: 'battery',
            component: DashboardComponent,
            data: {
              reportName: 'BatteryData'
            }
        },
        {
            path: 'mot-history',
            component: DashboardComponent,
            data: {
              reportName: 'MotHistoryData'
            }
        },
        {
            path: 'tyres',
            component: DashboardComponent,
          data: {
              reportName: 'TyreData'
          }
        },
        {
            path: 'can-price',
            component: DashboardComponent,
          data: {
              reportName: 'ValuationCanPrice'
          }
        },
        {
            path: 'valuation',
            component: DashboardComponent,
          data: {
            reportName: 'ValuationData'
          }
        },
        {
            path: 'vdi-check',
            component: DashboardComponent,
          data: {
            reportName: 'VdiCheckFull'
          }
        },
        {
            path: 'vehicle-mot-history',
            component: DashboardComponent,
          data: {
            reportName: 'VehicleAndMotHistory'
          }
        },
        {
            path: 'vehicle',
            component: DashboardComponent,
          data: {
            reportName: 'VehicleData'
          }
        },
        {
            path: 'vehicle-tax',
            component: DashboardComponent,
          data: {
            reportName: 'VehicleTaxData'
          }
        }
    ]

}

];

@NgModule({
  declarations: [
    LayoutComponent,
    BatteryData,
    AlertsComponent,
    CheckResultsComponent,
    SpecComponent,
    EconomyComponent,
    ValuationComponent,
    MotHistoryComponent,
    MileageComponent,
    ReportsListComponent,
    CheckDataParserComponent,
    DashboardComponent,
    TableInfoParserComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
  providers: [
    ReportsService,
    DataParserService,
    TextSeparatorService
  ]
})
export class DashboardModule { }
