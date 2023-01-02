import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  form: FormGroup;
  listaEstudios: any;
  listaExperiencia: any;
   modoEdit: any;
   
   //  datos de estudios
   idEstudio: number;
   idPersona: number;
   titEstudio: string;
   desEstudio: string;
   urlEstudio: string;

   url: string = 'http://localhost:8080';

   isupdated = false;    

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private datosPortfolio:PortfolioService) {
    
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';  
    
    this.idPersona=0;
    this.idEstudio=0;
    this.titEstudio="";
    this.desEstudio="";
    this.urlEstudio="";

    this.form = formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(100)]],
      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      url_imagen: ['', [Validators.required, Validators.pattern(reg)]],
      personaId: ['', [Validators.required]]
      
    })
   }

  ngOnInit(): void {
    this.isupdated = false;    
    this.datosPortfolio.obtenerDatos().subscribe( data=>{
    
      this.listaEstudios = data[0].estudios;
      this.listaExperiencia = data[0].experiencias;

      if (sessionStorage.getItem('currentUser') == "null") {
        this.modoEdit = false;        
      } else if (sessionStorage.getItem('currentUser') == null){
          this.modoEdit = false;       
      }else{
          this.modoEdit = true;      
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
  
  

  datosEditEstu(id:number){
    this.idPersona=this.listaEstudios[id].personaId;
    this.idEstudio = this.listaEstudios[id].id;
    this.titEstudio = this.listaEstudios[id].titulo;
    this.desEstudio= this.listaEstudios[id].descripcion;
    this.urlEstudio = this.listaEstudios[id].url_imagen;
    this.form.markAsUntouched();

  }
  
  datosEliEstu(id:number){
    this.idEstudio = this.listaEstudios[id].id;
    this.titEstudio = this.listaEstudios[id].titulo;
  }  

  datosPersona(){
    this.idEstudio=0;
    this.idPersona=this.listaEstudios[0].personaId;
    this.titEstudio = "";
    this.desEstudio= "";
    this.urlEstudio = "";
    this.form.markAsUntouched();
  }  

  onAgregar(event: Event){
    event.preventDefault();
    if (this.form.valid){
      console.log(JSON.stringify(this.form.value)); 
      console.log("Agregar/Modificar");    
      console.log(this.url + '/new/estudio');
      this.isupdated=true;  
      
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }
    
      return this.http.post('http://localhost:8080/new/estudio', JSON.stringify(this.form.value), httpOptions); 
      
    }else{
      alert("Debe ingresar todos los datos");
      this.form.markAllAsTouched();
      return null;
    }       
  }

  onEliminar(ide: number){
    console.log("Eliminar");    
    console.log(this.url + '/delete/estudio/' + ide);
    return this.http.delete(this.url + '/delete/estudio/' + ide);  
  }

  changeisUpdate(){  
    this.isupdated=false;  
  }  
}
