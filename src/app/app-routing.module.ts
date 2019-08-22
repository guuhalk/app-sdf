import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/dashboard/index/index.component';
import { ListarComponent } from './pages/visualizacao/listar/listar.component';
import { FormCadastroComponent } from './pages/cadastro/form-cadastro/form-cadastro.component';
import { AprovarFormComponent } from './pages/aprovacao/aprovar-form/aprovar-form.component';
import { ListRelComponent } from './pages/relatorio/list-rel/list-rel.component';



const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/dashboard' },  
  { path: 'dashboard',  component:IndexComponent },  
  { path: 'aprovar', component: AprovarFormComponent },
  { path: 'visualizacao', component: ListarComponent },
  { path: 'relatorio', component: ListRelComponent },
  { path: 'cadastro', component: FormCadastroComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
