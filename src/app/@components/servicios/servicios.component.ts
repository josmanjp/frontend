import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
  
 
export class ServiciosComponent implements OnInit {
  form: FormGroup;
  listaServicios: any;
  modoEdit: any;


  //  datos de estudios
  idServicio: number;
  idPersona: number;
  titServicio: string;
  desServicio: string;
  urlSercicio: string;
  isupdated = false;    

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private datosPortfolio:PortfolioService, private route: ActivatedRoute) { 
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';  
    
    
    this.idPersona=0;
    this.idServicio=0;
    this.titServicio="";
    this.desServicio="";
    this.urlSercicio="";

    this.form = formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(250)]],
      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      url_imagen: ['', [Validators.required, Validators.pattern(reg), Validators.maxLength(250)]],
      personaId: ['', [Validators.required]]            
    });    
  }
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idPersona');
    var url = "";
    if (id=== null || id=== undefined) {
      url = "buscar/persona/1";
    }else{
      url = "buscar/persona/" + id;
    }


  this.isupdated = false;       
  this.datosPortfolio.obtenerDatos(url).subscribe( data=>{    
    this.listaServicios = data.servicios; 
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

  datosEditServ(id:number){
    //this.idPersona=this.listaServicios[id].personaId;
    this.idServicio = this.listaServicios[id].id;
    this.titServicio = this.listaServicios[id].titulo;
    this.desServicio= this.listaServicios[id].descripcion;
    this.urlSercicio = this.listaServicios[id].url_imagen;
    this.form.markAsUntouched();
  }  
  datosEliServ(id:number){
    this.idServicio = this.listaServicios[id].id;
    this.titServicio = this.listaServicios[id].titulo;
  }    

  datosPersona(){
    this.idServicio=0;
    //this.idPersona=this.listaServicios[0].personaId;
    this.titServicio = "";
    this.desServicio= "";
    this.urlSercicio = "";
    this.form.markAsUntouched();
  }  

  changeisUpdate(){  
    this.isupdated=false;  
    this.ngOnInit();
  }  


  onAgregar(event: Event){
    event.preventDefault();
    if (this.form.valid){
      this.isupdated=true;        
      this.datosPortfolio.agregar(JSON.stringify(this.form.value),"new/servicio").subscribe( data=>{});
      return "Exito";    
    }else{
      alert("Debe ingresar todos los datos");
      this.form.markAllAsTouched();
      return null;
    }       
  }
  onEliminar(ide: number){  
    this.isupdated=true; 
    this.datosPortfolio.eliminar(ide,"servicio").subscribe( data=>{});
    return "Exito";        
  }

}
