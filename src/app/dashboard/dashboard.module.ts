import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsService } from '../core/services/reports.service';
import { SharedModule} from "../shared/shared.module";
import { LayoutComponent } from './components/layout/layout.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
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
            redirectTo: 'vdi-check',
            pathMatch: 'full'
        },
        {
            path: 'vdi-check',
            component: DashboardComponent,
            data: {
              reportName: 'VdiCheckFull'
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
            path: 'battery',
            component: DashboardComponent,
          data: {
            reportName: 'BatteryData'
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
        },
        {
          path: 'basic',
          component: DashboardComponent,
          data: {
            reportName: 'basic'
          }
        }

    ]

}

];

@NgModule({
  declarations: [
    LayoutComponent,
    ReportsListComponent,
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
