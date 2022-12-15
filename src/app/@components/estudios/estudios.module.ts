import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiosComponent } from './estudios.component';



@NgModule({
  declarations: [
    EstudiosComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
    EstudiosComponent
  ]

})
export class EstudiosModule { }
