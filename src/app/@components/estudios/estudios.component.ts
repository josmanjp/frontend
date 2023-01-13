import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  form: FormGroup;
  formex:  FormGroup;
  listaEstudios: any;
  listaExperiencia: any;
   modoEdit: any;
   
   //  datos de estudios
   idEstudio: number;
   idPersona: number;
   titEstudio: string;
   desEstudio: string;
   urlEstudio: string;

  // datos de experiencias
  idExperiencia: number;
  titExperiencia: string;
  porExperiencia: number;

   isupdated = false;    

  constructor( private http: HttpClient, private formBuilder: FormBuilder, private datosPortfolio:PortfolioService, private route: ActivatedRoute) {
    
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';  
    
    this.idPersona=0;
    this.idEstudio=0;
    this.titEstudio="";
    this.desEstudio="";
    this.urlEstudio="";

    this.idExperiencia=0;
    this.titExperiencia="";
    this.porExperiencia=0;


    this.form = formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(250)]],
      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      url_imagen: ['', [Validators.required, Validators.pattern(reg), Validators.maxLength(250)]],
      personaId: ['', [Validators.required]]            
    });

    this.formex =  formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(250)]],
      porcentaje: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
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
    
      this.listaEstudios = data.estudios;
      this.listaExperiencia = data.experiencias;
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

  get IdEx() {
    return this.formex.get('id');
  } 

  get Titulo() {
    return this.form.get('titulo');
  }

  get TituloEx() {
    return this.formex.get('titulo');
  }

  
  get Descripcion() {
    return this.form.get('descripcion');
  }


  
  get UrlImagen() {
    return this.form.get('url_imagen');
  }

  get Porcentaje() {
    return this.formex.get('porcentaje');
  }

  
  datosEditEstu(id:number){
    //this.idPersona=this.listaEstudios[id].personaId;
    this.idEstudio = this.listaEstudios[id].id;
    this.titEstudio = this.listaEstudios[id].titulo;
    this.desEstudio= this.listaEstudios[id].descripcion;
    this.urlEstudio = this.listaEstudios[id].url_imagen;
    this.form.markAsUntouched();
  }
  
  datosEditExpe(id:number){
    //this.idPersona=this.listaExperiencia[id].personaId;
    this.idExperiencia = this.listaExperiencia[id].id;
    this.titExperiencia = this.listaExperiencia[id].titulo;
    this.porExperiencia= this.listaExperiencia[id].porcentaje;
    this.formex.markAsUntouched();
  }

  datosEliEstu(id:number){
    this.idEstudio = this.listaEstudios[id].id;
    this.titEstudio = this.listaEstudios[id].titulo;
  }  

  datosEliExpe(id:number){
    this.idExperiencia = this.listaExperiencia[id].id;
    this.titExperiencia = this.listaExperiencia[id].titulo;
  }  


  datosPersona(){
    this.idEstudio=0;
    this.titEstudio = "";
    this.desEstudio= "";
    this.urlEstudio = "";
    this.form.markAsUntouched();
  }  

  datosPersonaEx(){
    this.idExperiencia=0;
    this.titExperiencia = "";
    this.porExperiencia= 0;
    this.formex.markAsUntouched();
  }  

  onAgregar(event: Event){
    console.log(JSON.stringify(this.form.value));
    event.preventDefault();
    if (this.form.valid){
      this.isupdated=true;        
      this.datosPortfolio.agregar(JSON.stringify(this.form.value),"new/estudio").subscribe( data=>{});
      return "Exito";    
    }else{
      alert("Debe ingresar todos los datos");
      this.form.markAllAsTouched();
      return null;
    }       
  }

  onAgregarEx(event: Event){
    event.preventDefault();
    if (this.formex.valid){
      this.isupdated=true;        
      this.datosPortfolio.agregar(JSON.stringify(this.formex.value),"new/experiencia").subscribe( data=>{});
      return "Exito";    
    }else{
      alert("Debe ingresar todos los datos");
      this.formex.markAllAsTouched();
      return null;
    }       
  }

  onEliminar(ide: number){  
    this.isupdated=true; 
    this.datosPortfolio.eliminar(ide,"estudio").subscribe( data=>{});
    return "Exito";        
  }

  onEliminarEx(ide: number){  
    this.isupdated=true; 
    this.datosPortfolio.eliminar(ide,"experiencia").subscribe( data=>{});
    return "Exito";        
  }

  changeisUpdate(){  
    this.isupdated=false;  
    this.ngOnInit();
  }  
}
