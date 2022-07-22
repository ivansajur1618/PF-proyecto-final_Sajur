import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './usuario/tabla/tabla.component';
import { NewComponent } from './usuario/new/new.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    TablaComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UsuarioModule { }
