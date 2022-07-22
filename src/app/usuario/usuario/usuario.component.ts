import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent  {
 
  
  visible = false
  // change(){
  //   if(this.visible){
  //     this.visible = false
  //   }

  // }

  constructor( private fb : FormBuilder) { }

  formularioAdministrador = this.fb.group({
    nombre : ['', [Validators.required]],
    contraseña : ['',[Validators.required]]
  })
}
