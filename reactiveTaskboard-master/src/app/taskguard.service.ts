import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class TaskgaurdService implements CanActivate {

  constructor(private taskdata:TaskService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.isUserLoggedIn();
  }
  isUserLoggedIn(){
    if(this.taskdata.isLogged){
      return true;
    }
    alert('Login Please');
    this.router.navigate(['/login']);
    return false;

  }
}

