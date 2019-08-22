import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprovarFormComponent } from './aprovar-form/aprovar-form.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';





@NgModule({
  declarations: [AprovarFormComponent ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    
  ]
})
export class AprovacaoModule { }
