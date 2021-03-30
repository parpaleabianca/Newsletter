import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './archive/archive.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CurrentNumberRoutingModule } from './archive-routing.module';

@NgModule({
  declarations: [ArchiveComponent, NewsItemComponent],
  imports: [
    CommonModule,
    CurrentNumberRoutingModule,
    SharedModule
  ]
})
export class ArchiveModule { }
