import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alumnos } from 'src/app/interfaces/alumnos';
import { ApiService } from 'src/app/services/api.service';
import { Router, RouterModule } from '@angular/router';
// import { Router } from '@angular/router';

// export interface PeriodicElement {
//   nombre: string;
//   perfil: string;
//   usuario: string;
//   id: number;
// }

// let ELEMENT_DAT: PeriodicElement[] = [

// ]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  

  displayedColumns: string[] = ['position', 'nombre', 'weight', 'symbol', 'acciones'];
  dataSource : any;
  suscription!: Subscription;

  // users : Alumnos[];
  constructor(private dataService : ApiService,  private router : Router) { }

  e = "alumnos"
  ngOnInit(): void {
    this.dataService.getUsers(this.e).subscribe((data ) => (
        this.dataSource = [...data]) 
    )
    // console.log(this.dataSource)
    // console.log(data)
    this.suscription = this.dataService.refresh$.subscribe(() =>{
      this.dataService.getUsers(this.e).subscribe((data ) => (
        this.dataSource = [...data]) 
    )
    })
  }

  deleteUser(id: number){
      this.dataService.deleteUser(id).subscribe( (res) =>(
        console.log(res)
      ))
      // this.dataService.deleteUser(id)
      console.log(id)
  }
  
  editUser(id : number){
    this.router.navigate(['../administrador/editar',id])
  }

  newUser(){
    this.router.navigate(['../administrador/new'])
  }
}
