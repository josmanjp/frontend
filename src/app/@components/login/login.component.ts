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

  get Email() {
    return this.form.get('correo');
  }
  get Password() {
    return this.form.get('contrasena');
  }


  onEnviar(event: Event) {
    if (this.form.valid) {
        event.preventDefault;
        this.autenticacionService.IniciarSesion(this.form.value).subscribe(data => {               
            if (data === null || data === undefined)
            {
              alert("Credenciales no validas");
            }else{
              this.ruta.navigate(['/portfolio/' + data.id]); 
            }
          },            
          error => {
              alert("Credenciales no validas " + error);
          })             
    }else {
        sessionStorage.setItem('currentUser', "null");
        sessionStorage.setItem('idUser', "0");
        alert("Credenciales no validas");
        
    }
  }

  onCerrar() {
        sessionStorage.setItem('currentUser', "null");
        sessionStorage.setItem('idUser', "0");  
        this.ruta.navigate(['/portfolio']);
  }
  
}
