import { Routes,RouterModule } from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Product1Component } from './product1/product1.component';
import { ProductResolveService } from './product-resolve.service';
import { HomeComponent } from './home/home.component';
// import { productResolved } from './productdisplay/product';


const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'customer',canActivate:[UserGuardService],component:CustomerComponent},
  {path:'signup2',canActivate:[UserGuardService],component:SignupReactiveDemoComponent},
  // {path:'product1', resolve:{pdata:ProductResolveService}, component:Product1Component},
{path:'product1',resolve:{pdata:ProductResolveService},component:Product1Component},
  {path:'login',component:LoginComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'users',data:{prelod:true},loadChildren:'./userdisplay/user.module#UserModule'},

  {path:'edituserreactive/:user_email',component:EdiuserreactiveComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
