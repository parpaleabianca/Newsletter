import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//others
import { TranslateModule } from "@ngx-translate/core";

//ng-zorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,

    //ng-zorro
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzToolTipModule,
  ],
  exports:[
    //components
    HeaderComponent,
    FooterComponent,

    //ng-zorro
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzToolTipModule,

    //others
    TranslateModule,
    CommonModule,
  ]
})
export class SharedModule { }
