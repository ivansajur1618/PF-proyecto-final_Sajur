import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: "user",
  loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
  {path: "administrador",
  loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
