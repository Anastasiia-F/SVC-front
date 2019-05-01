import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TermCondsComponent } from './term-conds/term-conds.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [TermCondsComponent, LegalNoticeComponent, ContactsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class InstractionsPagesModule { }
