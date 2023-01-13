import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  form: FormGroup;
  listaProyectos: any;
  modoEdit: any;
  //  datos de proyectos
  idProyecto: number;
  idPersona: number;
  titProyecto: string;
  desProyecto: string;
  urlImagen: string;
  urlProy: string;
  isupdated = false;  


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private datosPortfolio:PortfolioService, private route: ActivatedRoute) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';  
    this.idPersona=0;
    this.idProyecto=0;
    this.titProyecto="";
    this.desProyecto="";
    this.urlImagen="";
    this.urlProy="";
    this.form = formBuilder.group({
        id: ['', [Validators.required]],
        titulo: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(250)]],
        descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
        url_imagen: ['', [Validators.required, Validators.pattern(reg), Validators.maxLength(250)]],
        url: ['', [Validators.required, Validators.pattern(reg), Validators.maxLength(250)]],
        personaId: ['', [Validators.required]]            
      });    
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idPersona');
    var urlp = "";
    if (id=== null || id=== undefined) {
      urlp = "buscar/persona/1";
    }else{
      urlp = "buscar/persona/" + id;
    }    
    this.datosPortfolio.obtenerDatos(urlp).subscribe( data=>{    
      this.listaProyectos = data.proyectos;       
      this.idPersona = data.id; 
      if (sessionStorage.getItem('currentUser') === "null") {
        this.modoEdit = false;        
      } else if (sessionStorage.getItem('currentUser') === null){
          this.modoEdit = false;       
      }else{
        let currentUser = sessionStorage.getItem('idUser');
        if (currentUser===id){
          this.modoEdit = true;
        }else{
          this.modoEdit = false;
        }   
      }      
      
    });
  }

  get Id() {
    return this.form.get('id');
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Descripcion() {
    return this.form.get('descripcion');
  }
 
  get UrlImagen() {
    return this.form.get('url_imagen');
  }

  get Urlproyecto() {
    return this.form.get('url');
  }

  
  datosEditProy(id:number){
    this.idProyecto = this.listaProyectos[id].id;
    this.titProyecto = this.listaProyectos[id].titulo;
    this.desProyecto= this.listaProyectos[id].descripcion;
    this.urlImagen = this.listaProyectos[id].url_imagen;
    this.urlProy = this.listaProyectos[id].url;

    this.form.markAsUntouched();
  }  
  datosEliProy(id:number){
    this.idProyecto = this.listaProyectos[id].id;
    this.titProyecto = this.listaProyectos[id].titulo;
  }    

  datosPersona(){
    this.idProyecto=0;
    this.titProyecto = "";
    this.desProyecto= "";
    this.urlProy = "";
    this.urlImagen = "";
    this.form.markAsUntouched();
  }  

  changeisUpdate(){  
    this.isupdated=false; 
    window.location.reload(); 
    //this.ngOnInit();
  }  

  onAgregar(event: Event){
    event.preventDefault();
    if (this.form.valid){
      this.isupdated=true;        
      this.datosPortfolio.agregar(JSON.stringify(this.form.value),"new/proyecto").subscribe( data=>{});
      return "Exito";    
    }else{
      alert("Debe ingresar todos los datos");
      this.form.markAllAsTouched();
      return null;
    }       
  }


  onEliminar(ide: number){  
    this.isupdated=true; 
    this.datosPortfolio.eliminar(ide,"proyecto").subscribe( data=>{});
    return "Exito";        
  }


}
