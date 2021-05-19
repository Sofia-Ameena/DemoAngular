import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Data1Component } from './data1/data1.component';
import { Data2Component } from './data2/data2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'data1',component:Data1Component},
  {path:'data2',component:Data2Component},
  {path:'products',component:ProductsComponent,children:[
    {path:'mobiles',component:MobilesComponent},
    {path:'bikes',component:BikesComponent},
    {path:'telivisions',component:TelevisionsComponent},
    {path:'',redirectTo:'/products/mobiles',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
