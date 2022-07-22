import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './administrador/tabla/tabla.component';
import { MaterialModule } from '../modules/material.module';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    TablaComponent,
    EditComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ReactiveFormsModule,
    MaterialModule 
  ]
})
export class AdministradorModule { }
