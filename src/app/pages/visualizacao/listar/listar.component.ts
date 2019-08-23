import { Component, OnInit } from '@angular/core';
import { Solicitacao } from 'src/app/models/solicitacao';
import { Filtros } from 'src/app/models/filtros';
import { VisualizacaoService } from '../visualizacao.service';
import { Router } from '@angular/router';
import { CadastroService } from '../../cadastro/cadastro.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  statusClass:string;
  statusLabel:string;
  dataInicio:Date;
  dataFinal:Date;
  filtro = new Filtros;
  listaDeSolicitacoes:Solicitacao[];
  listaFormatada = [];
  listaSetor = []

  listaDeStatus = [
   { label:'Pendente'  ,value:'0' },
   { label:'Aprovado'  ,value:'1' },
   { label:'Reprovado' ,value:'2' }
  ]

  constructor( 
    private service: VisualizacaoService,
    private rota:Router, 
    private serviceEditar:CadastroService
    
    ){}

  ngOnInit() {
    
    this.service.getSetor().subscribe(
      (setor)=>{ this.listaSetor = setor.map(c => ({ label: c.descricao, value: c.codSetor })),
        console.log(this.listaSetor)
      },
      
      (erro)=> console.log(erro) 
    )

    
    this.service.getSolicitacoesPendentes().subscribe(
      (solicitacao)=>{ console.log(solicitacao)
        this.listaDeSolicitacoes = solicitacao},
      (error)=>console.error(error)
    )

  }

  onSubmit(filtro:Filtros){
    console.log(filtro);
  }


  editar(sol:Solicitacao){
    this.serviceEditar.emitirEdicao(sol);
    this.rota.navigateByUrl('/cadastro')
  }


  redirectCadastro(){
    this.rota.navigateByUrl('/cadastro')
  }

  validaStatus(status:number){
    
    if(status === 0){
      this.statusClass = 'status-pendente'
      this.statusLabel = 'Pendente';

    }else if(status === 1){
      this.statusClass = 'status-aprovado'
      this.statusLabel = 'Aprovado';

    }else{
      this.statusClass = 'status-reprovado'
      this.statusLabel = 'Reprovado';
    }

    return this.statusClass;

  }



}
