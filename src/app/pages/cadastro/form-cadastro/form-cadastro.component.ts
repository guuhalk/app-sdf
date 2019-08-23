import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Setor } from 'src/app/models/setor';
import { Solicitacao } from 'src/app/models/solicitacao';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  solicitacao = new Solicitacao;
  listaSetor = [];
  campoAbono:boolean = false;
  dataSelecionada:Date;
  parametrosEdicao:boolean = false;
  
  listaTipoAbono = [
    {label:"10 Primeiros",value:"10 Primeiros"},
    {label:"10 Ultimos",value:"10 Ultimos"}
  ];
  
  
  constructor(
    private service: CadastroService,
    private rota: Router) { }

  ngOnInit() {
    
    this.service.getSetor().subscribe(
      (setor)=>{ this.listaSetor = setor.map(c => ({ label: c.descricao, value: c.codSetor })),
        console.log(this.listaSetor)
      },
      
      (erro)=> console.log(erro) 
    )

    this.service.solicitacaoParaEditar.subscribe(
      (sol: Solicitacao)=>{
        this.solicitacao = sol;
        console.log(this.solicitacao)

      },
      (erro)=>console.log(erro)
        
      
    )

  }
 

  onSubmit(sol:Solicitacao){
    
    this.service.post(sol, this.dataSelecionada).subscribe(
      (sol)=> this.solicitacao = new Solicitacao,
      (erro)=>console.error(erro)
    )

  }


  limparCampos(form:NgForm){
    console.log(form)
    form.resetForm()
  }


  validaAbono(){
    if(this.solicitacao.pagarAbono === 'Sim'){
      this.campoAbono = true;
    }else{
      this.campoAbono = false;
    }
  }

  redirectVisualizacao(){
    this.rota.navigateByUrl('/visualizacao')
  }


  editaSolicitacao(edita:boolean, sol:Solicitacao){
    if(edita){
      this.solicitacao = sol;
    }  
  }
  





}
