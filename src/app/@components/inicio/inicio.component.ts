import { Component, OnInit } from '@angular/core';
import { GuardGuard } from 'src/app/servicios/guard.guard';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  miPortfolio: any;
  modoEdit: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data=>{
      console.log (data[0]);
      this.miPortfolio = data[0];
//      console.log("aqui: " + sessionStorage.getItem('currentUser'));
        if (sessionStorage.getItem('currentUser') == "null") {
          this.modoEdit = false;        
        } else if (sessionStorage.getItem('currentUser') == null){
            this.modoEdit = false;       
        }else{
            this.modoEdit = true;      
        }
         
//      console.log("Modo Edicion " + this.modoEdit)
    });

  }

}
