import { Injectable } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario/usuario.component';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  
  constructor(private usuario : UsuarioComponent) { }

  // hola = this.usuario.visible

  change(){
   console.log('hola')
  //  return this.hola = false
   
  }
}
