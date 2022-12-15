import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService) {
    
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data=>{
      console.log (data[0]);
      this.miPortfolio = data[0];
      
    });

  }
}
