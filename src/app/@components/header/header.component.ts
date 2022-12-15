import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio: any;
  modoEdit: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data=>{
      console.log (data[0]);
      this.miPortfolio = data[0];
      if (sessionStorage.getItem('currentUser') == "null") {
        this.modoEdit = false;        
      } else if (sessionStorage.getItem('currentUser') == null){
          this.modoEdit = false;       
      }else{
          this.modoEdit = true;      
      }
    });

  }

  CerrarSesion(){
    sessionStorage.setItem('currentUser',"null");
    this.modoEdit=false;
    return this.modoEdit
  }

}
