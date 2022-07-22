import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Alumnos } from '../../interfaces/alumnos'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private fb : FormBuilder, private dataService : ApiService, private activateRouter: ActivatedRoute, private router : Router,  ) { }

  //  nuevoId = 'hola'
  aalumnoId  = this.activateRouter.snapshot.paramMap.get('id');
  // aalumnoId : string
  
   FormularioEditar = this.fb.group({
    nombre : ["", [Validators.required]],
    curso : ["",[Validators.required]]  ,
    inscripciones : ["",[Validators.required]],
    id:["",[Validators.required]]
  })
  
  ngOnInit(): void {  
    // this.aalumnoId : String
  }
  
  redirigir(){
    console.log('hola')
  }
  newUser( form : Alumnos ){
    
    // this.aalumnoId : strin
    
  return this.dataService.postUser(form).subscribe(data=> 
    console.log(data)
    // this.router.navigate(['../administrador/tabla'])
  
    )

  }


  

}
