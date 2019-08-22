import { Component, OnInit } from '@angular/core';
import { AprovacaoService } from '../aprovacao.service';
import { Solicitacao } from 'src/app/models/solicitacao';

@Component({
  selector: 'app-aprovar-form',
  templateUrl: './aprovar-form.component.html',
  styleUrls: ['./aprovar-form.component.css']
})
export class AprovarFormComponent implements OnInit {

  listaSolicitacaoPendentes: Solicitacao[];

  constructor(private serviceAprovar: AprovacaoService) { }

  ngOnInit() {
    
    this.serviceAprovar.getSolicitacoesPendentes().subscribe(
      (sol)=>{
        this.listaSolicitacaoPendentes = sol;
      },
      (err)=> console.error(err)
    )
  }


  aprovar(sol:Solicitacao){
    sol.status = 1;
    this.serviceAprovar.update(sol,'aprovar').subscribe(
      
      (solicitacao)=>{   
        let  i = this.listaSolicitacaoPendentes.findIndex(s => solicitacao.id === sol.id)
        this.listaSolicitacaoPendentes.splice(i,1);   

      },
      (erro)=>console.log(erro)
    )


  }

  reprovar(sol:Solicitacao){
    sol.status = 2;
    this.serviceAprovar.update(sol,'reprovar').subscribe(
      
      (solicitacao)=>{   
        let  i = this.listaSolicitacaoPendentes.findIndex(s => solicitacao.id === sol.id)
        this.listaSolicitacaoPendentes.splice(i,1);   

      },
      (erro)=>console.log(erro)
    )
  }



}
