import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Solicitacao } from 'src/app/models/solicitacao';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  readonly urlSolicitacao = 'http://localhost:8090/api/solicitacoes';
  readonly urlSetor = 'http://localhost:8090/api/setores';

  private listaSolicitacaoSubject$: BehaviorSubject<Solicitacao[]> = new BehaviorSubject<Solicitacao[]>(null);

  constructor(private http: HttpClient) { }


  getSetor():Observable<any[]>{
    return this.http.get<any[]>(this.urlSetor);
    
  }

  post(sol:Solicitacao, data:Date):Observable<Solicitacao>{
    
    sol.data = moment(data).format('YYYY-MM-DD');
    return this.http.post<Solicitacao>(this.urlSolicitacao,sol);
  
  }


  emitirEdicao(sol:Solicitacao){
    
  }


/*

  ULTILIZANDO PROMISSE

  getSetor(): Promise<any> {
    return this.http.get(this.urlSetor)
      .toPromise();
  }

*/

}
