import { HttpClient  , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //url: string="https://portfolio-josmanjp.koyeb.app"
  url: string="https://portfolio-8mt5.onrender.com"
  //url: string="http://localhost:8080"
  constructor(private http:HttpClient) { }
  

  obtenerDatos(ep : string): Observable<any>{     
    //console.log(this.url + "/" + ep);
    return this.http.get<any>(this.url + "/" + ep);
  }


  agregar(Objeto : Object, ep : string): Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this.http.post<any>(this.url +  "/" + ep, Objeto, httpOptions);

  }

  eliminar(ide : number, ep : string): Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this.http.delete<any>(this.url + "/delete/" + ep + "/" + ide, httpOptions);
    
  }

}
