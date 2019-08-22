import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  
 

})
export class DashboardModule { }
