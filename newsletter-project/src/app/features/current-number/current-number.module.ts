import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentNumberRoutingModule } from './current-number-routing.module';
import { NewsletterComponent } from './newsletter/newsletter.component';


@NgModule({
  declarations: [NewsletterComponent],
  imports: [
    CommonModule,
    CurrentNumberRoutingModule
  ]
})
export class CurrentNumberModule { }
