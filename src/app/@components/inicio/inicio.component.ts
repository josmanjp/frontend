import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  form: FormGroup;
  miPortfolio: any;
  modoEdit: any;
  

  //  datos de estudios
  idPersona: number;
  nomPersona: string;
  apePersona: string;
  domPersona: string;
  telPersona: string;
  corPersona: string;
  conPersona: string;
  titPersona: string;
  somPersona: string;
  urlPersona: string;  
  estPersona: string;
  prePersona: string;
  sopPersona: string;

  isupdated = false; 
  
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private datosPortfolio:PortfolioService,  private route: ActivatedRoute) { 
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';  
    this.idPersona=0;
    this.nomPersona="";
    this.apePersona="";
    this.domPersona="";
    this.telPersona="";
    this.corPersona="";
    this.somPersona="";
    this.urlPersona="";
    this.conPersona="";
    this.titPersona="";
    this.estPersona="";
    this.prePersona="";
    this.sopPersona="";

    this.form = formBuilder.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(100)]],
      apellido: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(100)]],
      domicilio: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(255)]],
      telefono: ['', [Validators.required, Validators.minLength(11) ,  Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.minLength(5) , Validators.email, Validators.maxLength(250)]],
      sobre_mi: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(255)]],
      url_foto: ['', [Validators.required, Validators.pattern(reg),  Validators.maxLength(255)]],
      contrasena: ['', [Validators.required, Validators.minLength(8) ,  Validators.maxLength(20)]],
      titulo: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(250)]],
      estado: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      precios: ['', [Validators.required , Validators.minLength(5), Validators.maxLength(20)]],
      soporte: ['', [Validators.required, Validators.minLength(4) , Validators.maxLength(20)]]            
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
    this.miPortfolio = data;
    this.idPersona = this.miPortfolio.id;
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

  get Nombre() {
    return this.form.get('nombre');
  }

  get Apellido() {
    return this.form.get('apellido');
  }

  get Domicilio() {
    return this.form.get('domicilio');
  }
 
  get Telefono() {
    return this.form.get('telefono');
  }
 
  get Correo() {
    return this.form.get('correo');
  }
 
  get Sobremi() {
    return this.form.get('sobre_mi');    
  }

  get UrlFoto() {
    return this.form.get('url_foto');
  }

  get Contrasena() {
    return this.form.get('contrasena');
  }


  get Titulo() {
    return this.form.get('titulo');
  }

  get Estado() {
    return this.form.get('estado');    
  }

  get Precio() {
    return this.form.get('precios');
  }

  get Soporte() {
    return this.form.get('soporte');
  }


  togglePasswordVisibility(password: HTMLInputElement, icono : HTMLElement) {
    // Alternar el atributo type del campo de contraseña
    if (password.type === 'password') {
      password.type = 'text';
      icono.className='fa fa-eye-slash';
      icono.setAttribute("title","Ocultar Contraseña");

    } else {
      password.type = 'password';
      icono.className='fa fa-eye';
      icono.setAttribute("title","Ver Contraseña");
    }
  }

 
  datosEditPers(){

    this.nomPersona= this.miPortfolio.nombre;
    this.apePersona= this.miPortfolio.apellido;
    this.domPersona= this.miPortfolio.domicilio;
    this.telPersona= this.miPortfolio.telefono;
    this.corPersona= this.miPortfolio.correo;
    this.somPersona= this.miPortfolio.sobre_mi;
    this.urlPersona= this.miPortfolio.url_foto;
    this.conPersona= this.miPortfolio.contrasena;
    this.titPersona= this.miPortfolio.titulo;
    this.estPersona= this.miPortfolio.estado;
    this.prePersona= this.miPortfolio.precios;
    this.sopPersona= this.miPortfolio.soporte;

    this.form.markAsUntouched();
  }  

  changeisUpdate(){  
    this.isupdated=false;  
    window.location.reload();
  }  


  onAgregar(event: Event){
    event.preventDefault();
    if (this.form.valid){
      this.isupdated=true;        
      this.datosPortfolio.agregar(JSON.stringify(this.form.value),"new/persona").subscribe( data=>{});
      return "Exito";    
    }else{
      alert("Debe ingresar todos los datos");
      this.form.markAllAsTouched();
      return null;
    }       
  }

}
