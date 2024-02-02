import { SignupComponent } from './Authentic/signup/signup.component';
import { LoginComponent } from './Authentic/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { CartComponent } from './user/cart/cart.component';
import { MedicineComponent } from './user/products/medicine/medicine.component';
import { ApparatusComponent } from './user/products/apparatus/apparatus.component';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'user', component:UserComponent, canActivate:[AuthGuard]},
  {path:'profile', component:ProfileComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'medi', component:MedicineComponent},
  {path:'apparatus', component:ApparatusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
