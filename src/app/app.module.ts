import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './@components/about/about.module';
import { ContactameModule } from './@components/contactame/contactame.module';
import { EstudiosModule } from './@components/estudios/estudios.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { InicioModule } from './@components/inicio/inicio.module';
import { ProyectosModule } from './@components/proyectos/proyectos.module';
import { ServiciosModule } from './@components/servicios/servicios.module';
import { LoginComponent } from './@components/login/login.component';

import { AppComponent } from './app.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortfolioComponent } from './@components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule}  from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactameModule,
    EstudiosModule,
    FooterModule,
    HeaderModule,
    ProyectosModule,
    ServiciosModule,
    InicioModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
