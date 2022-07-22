import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { AdministradorComponent } from './administrador/administrador.component';
import { TablaComponent } from './administrador/tabla/tabla.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path:"",component: AdministradorComponent,
  children : [
    {path:'tabla',
    canActivate: [ActivateGuard],
    component: TablaComponent,
    },
    {path:'editar/:id',
    component:EditComponent
    },
    {path:'new',
    component:NewComponent
    }
    ,]}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
