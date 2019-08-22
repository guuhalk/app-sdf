import { Component, OnInit } from '@angular/core';
import { Solicitacao } from 'src/app/models/solicitacao';
import { AprovacaoService } from '../../aprovacao/aprovacao.service';
import { Filtros } from 'src/app/models/filtros';
import { HttpClient } from '@angular/common/http';
import { VisualizacaoService } from '../visualizacao.service';
import { element } from 'protractor';

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

  listaDeStatus = [
   { label:'Pendente'  ,value:'0' },
   { label:'Aprovado'  ,value:'1' },
   { label:'Reprovado' ,value:'2' }
  ]

  constructor( private service: VisualizacaoService ) { }

  ngOnInit() {


    
    this.service.get().subscribe(
      (solicitacao)=>this.listaDeSolicitacoes = solicitacao,
      (error)=>console.error(error)      
    )



  }

  onSubmit(filtro:Filtros){
    console.log(filtro);

    /*
    this.service.postFiltro(filtro, this.dataInicio,this.dataFinal).subscribe(
      (solicitacao)=>{
        this.listaDeSolicitacoes = solicitacao,
        console.log(solicitacao)
      },
      
      (error)=>console.error(error)      
    )*/

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
