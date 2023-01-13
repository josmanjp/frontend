import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //url = 'http://localhost:8080/autenticacion/login';
  url = 'https://portfolio-8mt5.onrender.com/autenticacion/login';
  //url = 'http://localhost:8080/autenticacion/login';
  currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http: HttpClient) { 
    //console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }  

  IniciarSesion(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      sessionStorage.setItem('idUser', JSON.stringify(data.id));
      this.currentUserSubject.next(data);
      return data;
    }));        
  }
    
  get usuarioAutenticado () {
    return this.currentUserSubject.value;
  }
}
