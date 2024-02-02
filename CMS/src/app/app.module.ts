import { SignupComponent } from './Authentic/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentic/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AdminModule } from './admin/admin.module';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/layout/header/header.component';
import { FooterComponent } from './user/layout/footer/footer.component';
import { SliderComponent } from './user/layout/slider/slider.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { MedicineComponent } from './user/products/medicine/medicine.component';
import { ApparatusComponent } from './user/products/apparatus/apparatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    MedicineComponent,
    ApparatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
    AdminModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
