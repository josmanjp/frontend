import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService, private ruta: Router) {
    this.form = formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]]
    }) 
  }

  ngOnInit(): void {
  }


  get Email() {
    return this.form.get('correo');
  }
  get Password() {
    return this.form.get('contrasena');
  }


  onEnviar(event: Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data => { 
      console.log("DATA:" + JSON.stringify(data));       
    })       
    this.ruta.navigate(['/portfolio']);
  }
}
