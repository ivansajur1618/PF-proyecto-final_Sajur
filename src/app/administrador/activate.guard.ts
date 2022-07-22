import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(/* private authService : AuthService, */ private router : Router) {}

 islogin = true
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(this.islogin){
    //   return this.router.navigate(['tabla']).then(()=> true)
    // }
     return true
  }
  
}
