import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Alumnos } from '../../interfaces/alumnos'; 
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private fb : FormBuilder, private dataService : ApiService, private activateRouter: ActivatedRoute, private router : Router,  ) { }

  //  nuevoId = 'hola'
  aalumnoId  = this.activateRouter.snapshot.paramMap.get('id');
  // aalumnoId : string
  
   FormularioEditar = this.fb.group({
    nombre : ["", [Validators.required]],
    curso : ["",[Validators.required]]  ,
    inscripciones : ["",[Validators.required]],
    id:[`${this.aalumnoId}`]
  })
  
  ngOnInit(): void {  
    // this.aalumnoId : String
  }
  
  redirigir(){
    console.log('hola')
  }
  actualizarUser( form : Alumnos ){
    
    // this.aalumnoId : strin
    
  return this.dataService.updateUser(form , this.aalumnoId).subscribe(data=> 
    console.log(data)
    // this.router.navigate(['../administrador/tabla'])
  
    )

  }


  

}
