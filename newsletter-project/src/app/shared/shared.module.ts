import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//others
import { TranslateModule } from '@ngx-translate/core';

//ng-zorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,

    //ng-zorro
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzToolTipModule,
    NzRadioModule,
    NzSelectModule,
  ],
  exports: [
    //components
    HeaderComponent,
    FooterComponent,

    //ng-zorro
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzToolTipModule,
    NzRadioModule,
    NzSelectModule,

    //others
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
