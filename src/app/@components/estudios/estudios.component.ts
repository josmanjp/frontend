import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  listaEstudios: any;
  listaExperiencia: any;
  modoEdit: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data=>{
    
      this.listaEstudios = data[0].estudios;
      this.listaExperiencia = data[0].experiencias;

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
