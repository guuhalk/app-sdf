import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule
  ],
  exports:[NavBarComponent]
})
export class CoreModule { }
