import { Routes, RouterModule } from "@angular/router";
// import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { TaskgaurdService } from './taskgaurd.service';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { TaskgaurdService } from './taskguard.service';


   const arr: Routes=[
     {path:'',component:HomeComponent},
      // {path:'task', canActivate:[TaskgaurdService],component:Taskdisplay1Component},
    {path:'task',canActivate:[TaskgaurdService],component:AlltasksComponent},
     {path:'login',component:LoginComponent},
     {path:'taskguard',component:TaskgaurdService}
   ];

   export const routing=RouterModule.forRoot(arr);

