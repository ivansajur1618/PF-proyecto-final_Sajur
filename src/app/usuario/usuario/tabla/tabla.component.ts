import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alumnos } from 'src/app/interfaces/alumnos';
import { ApiService } from 'src/app/services/api.service';
import { Router, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario.component';
// import { UsuarioModule } from '../../usuario.module';
// import { ChangeService } from 'src/app/services/change.service';




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
    // this.change.change()
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
    this.router.navigate(['../user/new'])
  }
}
