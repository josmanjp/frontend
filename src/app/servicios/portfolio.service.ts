import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //url: string="https://portfolio-josmanjp.koyeb.app/ver/personas"
  //url: string="https://portfolio-8mt5.onrender.com/ver/personas"
  url: string="http://localhost:8080/ver/personas"
  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get<any>(this.url);

  }
}
