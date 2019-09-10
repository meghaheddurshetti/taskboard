// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _router:Router) { }
  currentUser;
  user_email:string;
  user_password:string;

  login(user_email:string,user_password:string){
    if(this.user_email=="admin"&&this.user_password=="1234"){
      this.currentUser={
        user_email:user_email,
        password:user_password,
        isAdmin:true
      };
      return null;
    }
    this.currentUser={
      user_email:user_email,
      password:user_password,
      isAdmin:false
    };
  }
  logout(){
    this.currentUser=null;
    this._router.navigate(['']);
  }
  get isLogged():boolean{
    return !!this.currentUser;
  }
}

