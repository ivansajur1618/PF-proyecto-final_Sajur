import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard.guard';
import { NewComponent } from './usuario/new/new.component';
import { TablaComponent } from './usuario/tabla/tabla.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: "", component: UsuarioComponent,
  children: [
    {path:"tabla",
    canActivate: [GuardGuard],
    component: TablaComponent  
  },
  {
    path:"new",
    component: NewComponent
  }
  ]

  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
