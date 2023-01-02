import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiosComponent } from './estudios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    EstudiosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule    

  ],
    exports: [
    EstudiosComponent
  ]

})
export class EstudiosModule { }
