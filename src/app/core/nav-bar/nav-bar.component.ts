import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router: Router) { }

  display:boolean;

  ngOnInit() {
  }


  redirectVisualizacao(){
    this.router.navigateByUrl('/visualizacao');
    this.display=false;
  }
  
  redirectRelatorio(){
    this.router.navigateByUrl('/relatorio');
    this.display=false;
  }

  redirectCadastro(){
    this.router.navigateByUrl('/cadastro');
    this.display=false;
  }

  redirectAprovacao(){
    this.router.navigateByUrl('/aprovar');
    this.display=false;
  }

  redirectDashboard(){
    this.router.navigateByUrl('/dashboard');
    this.display=false;
  }



}



