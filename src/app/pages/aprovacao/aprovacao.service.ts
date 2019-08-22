import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Solicitacao } from 'src/app/models/solicitacao';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AprovacaoService {

  readonly url = "http://localhost:8090/api/solicitacoes";
  
  private listaSolicitacoesPendentesSubject$: BehaviorSubject<Solicitacao[]> = new BehaviorSubject<Solicitacao[]>(null);
  
  private carregado: boolean = false;

  constructor(private http: HttpClient) { }


  getSolicitacoesPendentes():Observable<Solicitacao[]>{
   
    console.log(this.carregado)

    if (!this.carregado){
        this.http.get<Solicitacao[]>(`${this.url}/status/${0}`)
        .subscribe(this.listaSolicitacoesPendentesSubject$)
        this.carregado = true;
    }
    

    return this.listaSolicitacoesPendentesSubject$.asObservable();
  }

  
  update(sol: Solicitacao, tipo: string):Observable<Solicitacao>{
    return this.http.put<Solicitacao>(`${this.url}/${sol.id}/${tipo}`, sol) 
  }




}
