import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {
  form: FormGroup;
  miPortfolio: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private datosPortfolio:PortfolioService, private route: ActivatedRoute) {
    this.form = formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(250)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      mensaje: ['', [Validators.required, Validators.minLength(5) ,  Validators.maxLength(250)]]            
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
    
    this.datosPortfolio.obtenerDatos(url).subscribe( data=>{    
      this.miPortfolio = data;
    });

  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Email() {
    return this.form.get('email');
  }
  
  get Asunto() {
    return this.form.get('asunto');
  }

  get Mensaje() {
    return this.form.get('mensaje');
  }



  onEnviar(event: Event){
    event.preventDefault();
    if (this.form.valid){
      return this.http.post( "https://sifx3.com/emailpf.php",JSON.stringify(this.form.value)).subscribe( data=>{
        alert("Tu Mensaje ha sido enviado con exito, Gracias por Contactarme");
        this.form.reset();  
        console.log(data);

      });
      return "Exito";    
    }else{
      alert("Debe ingresar todos los datos");
      this.form.markAllAsTouched();
      return null;
    }       
  }

}
