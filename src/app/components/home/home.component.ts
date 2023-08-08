import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from './../../model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform = 0
    this.getProductByCatalog()
  }

  products : Product[]

  catalog = [
    'Japanese Street Fashion'
  ]

  getProductByCatalog(){
    this.productService.getProductByCatalog(this.catalog[0]).subscribe(
      (response : Product[]) => {
        this.products = response;
        console.log(this.products);
        
      }
    )
  }



  slider
  defaultTransform
  goNext() {
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goPrev() {

    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
 

 
}
