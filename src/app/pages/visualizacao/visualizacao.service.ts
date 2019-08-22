import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Solicitacao } from 'src/app/models/solicitacao';
import { Filtros } from 'src/app/models/filtros';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisualizacaoService {


  readonly urlSolicitacao = 'http://localhost:8090/api/solicitacoes';
  readonly urlSetor = 'http://localhost:8090/api/setores';

  private listaDeSolitacaoSubject$: BehaviorSubject<Solicitacao[]> = new BehaviorSubject<Solicitacao[]>(null);
  carregado: boolean = false;

  constructor(private http: HttpClient) { }



  get():Observable<Solicitacao[]>{
    return this.http.get<Solicitacao[]>(this.urlSolicitacao)
  }



  getSolicitacoesPendentes():Observable<Solicitacao[]>{
   
    console.log(this.carregado)

    if (!this.carregado){
        this.http.get<Solicitacao[]>(`${this.urlSolicitacao}/status/${0}`)
        .subscribe(this.listaDeSolitacaoSubject$)
        this.carregado = true;
    }
    

    return this.listaDeSolitacaoSubject$.asObservable();
  }


  postFiltro(filtro:Filtros, dataInicio:Date, dataFinal:Date):Observable<Solicitacao[]>{
    return this.http.post<Solicitacao[]>(this.urlSolicitacao,filtro).pipe(
      tap(
        (sol) => {
          console.log(sol)        
        }
      )
    )
  }



}
