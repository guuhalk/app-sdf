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

  constructor(private http: HttpClient) { }



}
