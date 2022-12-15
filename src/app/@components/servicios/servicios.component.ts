import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
  

export class ServiciosComponent implements OnInit {
  listaServicios: any;
  modoEdit: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe( data=>{    
    this.listaServicios = data[0].servicios; 

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
