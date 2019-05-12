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
            component: BatteryData
        },
        {
            path: 'alerts',
            component: AlertsComponent
        },
        {
            path: 'check-results',
            component: CheckResultsComponent
        },
        {
            path: 'spec',
            component: SpecComponent
        },
        {
            path: 'economy',
            component: EconomyComponent
        },
        {
            path: 'valuation',
            component: ValuationComponent
        },
        {
            path: 'mot-history',
            component: MotHistoryComponent
        },
        {
            path: 'mileage',
            component: MileageComponent
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
    CheckDataParserComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
  providers: [
    ReportsService,
    DataParserService
  ]
})
export class DashboardModule { }
