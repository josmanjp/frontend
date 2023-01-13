import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService, private route: ActivatedRoute) {
    
   }

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
      
    });

  }
}
