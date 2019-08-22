import { Component, OnInit } from '@angular/core';
import { Solicitacao } from 'src/app/models/solicitacao';
import { AprovacaoService } from '../../aprovacao/aprovacao.service';
import { Filtros } from 'src/app/models/filtros';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  dataInicio:Date;
  dataFinal:Date;
  filtro = new Filtros;
  listaDeSolicitacoes:Solicitacao[];

  listaDeStatus = [
   { label:'Pendente'  ,value:'0' },
   { label:'Aprovado'  ,value:'1' },
   { label:'Reprovado' ,value:'2' }
  ]

  constructor(  ) { }

  ngOnInit() {

  }

  onSubmit(){

  }


}
