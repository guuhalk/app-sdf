import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { TableModule} from 'primeng/table';
import { ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule} from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule
    
  ]
})
export class VisualizacaoModule { }
