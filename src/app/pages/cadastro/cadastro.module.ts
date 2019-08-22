import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule} from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule} from 'primeng/dropdown';
import {SpinnerModule} from 'primeng/spinner';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations: [FormCadastroComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    SpinnerModule,
    RadioButtonModule,
    InputTextareaModule,
    SelectButtonModule
  ]
})
export class CadastroModule { }
