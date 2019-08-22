import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private rota: Router){}

  ngOnInit() {
  }


  redirectVisualizacao(){
    this.rota.navigateByUrl('/visualizacao');
  }
  
  redirectRelatorio(){
    this.rota.navigateByUrl('/relatorio');
  }

  redirectCadastro(){
    this.rota.navigateByUrl('/cadastro');
  }

  redirectAprovacao(){
    this.rota.navigateByUrl('/aprovar');
  }
}
