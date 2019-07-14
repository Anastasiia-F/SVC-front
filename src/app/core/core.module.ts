import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RequestInterceptor } from './services/request.interceptor';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeTopMenuComponent } from './components/home-top-menu/home-top-menu.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeTopMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
          throw new Error('CoreModule is already loaded. Import only in AppModule');
      }
  }
}
