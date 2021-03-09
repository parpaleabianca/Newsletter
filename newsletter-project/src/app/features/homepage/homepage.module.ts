import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [HomepageComponent, ItemComponent],
  imports: [
    RouterModule,
    SharedModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule { }
