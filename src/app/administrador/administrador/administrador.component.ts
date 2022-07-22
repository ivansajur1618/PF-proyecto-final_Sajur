import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent  {

  constructor( private fb : FormBuilder) { }

  formularioAdministrador = this.fb.group({
    nombre : ['', [Validators.required]],
    contraseña : ['', [Validators.required]]
  })

  //  console.log(formularioAdministrador.value) : any 
   
  

}
