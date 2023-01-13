import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio: any;
  modoEdit: any;
  constructor(private datosPortfolio:PortfolioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idPersona');
    var url = "";
    if (id=== null || id=== undefined) {
      url = "buscar/persona/1";
    }else{
      url = "buscar/persona/" + id;
    }

    this.datosPortfolio.obtenerDatos(url).subscribe( data=>{      
      this.miPortfolio = data;
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
    sessionStorage.setItem('currentUser', "null");
    sessionStorage.setItem('idUser', "0");  
    window.location.reload();
  }

}
