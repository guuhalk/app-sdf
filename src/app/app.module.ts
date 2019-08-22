import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputTextModule} from 'primeng/inputtext';
import { ButtonModule} from 'primeng/button';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { VisualizacaoModule } from './pages/visualizacao/visualizacao.module';
import { AprovacaoModule } from './pages/aprovacao/aprovacao.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { RelatorioModule } from './pages/relatorio/relatorio.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    CoreModule,
    AppRoutingModule,
    DashboardModule,
    VisualizacaoModule,
    AprovacaoModule,
    CadastroModule,
    RelatorioModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
