import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { ApparatusComponent } from './apparatus/apparatus.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'home',
    children:[
      {path:'home', component:HomeComponent},
      {path:'medi', component:MedicinesComponent},
      {path:'apparatus',   component:ApparatusComponent},
      {path:'transaction', component:TransactionComponent},
      {path:'details',     component:DetailsComponent},
      {path:'feedback',    component:FeedbackComponent},
      {path:'contact', component:ContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
