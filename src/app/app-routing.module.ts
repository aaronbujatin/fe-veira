import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'product', component : ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
})
export class AppRoutingModule { }
