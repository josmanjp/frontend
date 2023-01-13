import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactameComponent } from './contactame.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ContactameComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule       
  ],
  exports: [
    ContactameComponent
  ]
})
export class ContactameModule { }
