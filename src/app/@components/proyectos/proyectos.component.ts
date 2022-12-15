import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  listaProyectos: any;
  modoEdit: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data=>{    
      this.listaProyectos = data[0].proyectos;  
      if (sessionStorage.getItem('currentUser') == "null") {
        this.modoEdit = false;        
      } else if (sessionStorage.getItem('currentUser') == null){
          this.modoEdit = false;       
      }else{
          this.modoEdit = true;      
      }
      
    });
  }

}
