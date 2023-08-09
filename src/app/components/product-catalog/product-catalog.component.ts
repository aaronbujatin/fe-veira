import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent {

  constructor(private productService: ProductService, private elementRef: ElementRef) { }
  
  ngOnInit(){
    
  }

  [x: string]: any;

  @Input() test: string

  @Input() products: Product[] = [];


  catalog = [
    'Japanese Street Fashion',
    'Skatewear Collections',
    'Teddy Bear Collections',
    'Cars Collections',
    'Hip Hop Artists Collections',
    'Urban Collections',
    'Renaissance Collections',
    'Sportswear Collections',
    'HypeBeasts Collections',
  ]

  getProductSportswearCatalog() {
    this.productService.getProductByCatalog(this.catalog[7]).subscribe(
      (response: Product[]) => {
        this.products = response;
      }
    )
  }

  getProductHypeBeastsCatalog() {
    this.productService.getProductByCatalog(this.catalog[8]).subscribe(
      (response: Product[]) => {
        this.products = response;

      }
    )
  }

  @Input() catalogTitle: string = '';
  currentIndex: number = 0;
  itemWidth: number = 410; // Adjust this according to your design

  get transformValue() {
    return `translateX(-${this.currentIndex * this.itemWidth}px)`;
  }

  goNext() {
   
    const prodLenght = this.products.length 

    this.currentIndex = (this.currentIndex + 1) % prodLenght;
    console.log(this.currentIndex)
  }

  goPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  

  

}
