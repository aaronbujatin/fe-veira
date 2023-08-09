import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from './../../model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.slider = document.getElementById("slider");
    // this.defaultTransform = 0
    this.getAllCatalog();

  }

  currentItem : "Test from parent";

  public getAllCatalog() {
    this.getProductJapaneseCatalog();
    this.getProductCarsCatalog();
    this.getProductHipHopArtistsCatalog()
    this.getProductHypeBeastsCatalog()
    this.getProductJapaneseCatalog()
    this.getProductRenaissanceCatalog()
    this.getProductSkatewearCatalog()
    this.getProductSportswearCatalog()
    this.getProductTeddyBearCatalog()
    this.getProductUrbanCatalog()
  }

  catalogJapanese: Product[]
  catalogSkatewear: Product[]
  catalogTeddyBear: Product[]
  catalogCars: Product[]
  catalogHipHopArtists: Product[]
  catalogUrban: Product[]
  catalogRenaissance: Product[]
  catalogHypeBeasts: Product[]
  catalogSportswear: Product[]


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

 

  getProductJapaneseCatalog() {
    this.productService.getProductByCatalog(this.catalog[0]).subscribe(
      (response: Product[]) => {
        this.catalogJapanese = response;
        console.log(this.catalogJapanese);
      }
    )
  }

  getProductSkatewearCatalog() {
    this.productService.getProductByCatalog(this.catalog[1]).subscribe(
      (response: Product[]) => {
        this.catalogSkatewear = response;
        console.log(this.catalogSkatewear);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getProductTeddyBearCatalog() {
    this.productService.getProductByCatalog(this.catalog[2]).subscribe(
      (response: Product[]) => {
        this.catalogTeddyBear = response;
      }
    )
  }

  getProductCarsCatalog() {
    this.productService.getProductByCatalog(this.catalog[3]).subscribe(
      (response: Product[]) => {
        this.catalogCars = response;
      }
    )
  }

  getProductHipHopArtistsCatalog() {
    this.productService.getProductByCatalog(this.catalog[4]).subscribe(
      (response: Product[]) => {
        this.catalogHipHopArtists = response;
      }
    )
  }

  getProductUrbanCatalog() {
    this.productService.getProductByCatalog(this.catalog[5]).subscribe(
      (response: Product[]) => {
        this.catalogUrban = response;
      }
    )
  }

  getProductRenaissanceCatalog() {
    this.productService.getProductByCatalog(this.catalog[6]).subscribe(
      (response: Product[]) => {
        this.catalogRenaissance = response;
      }
    )
  }

  getProductSportswearCatalog() {
    this.productService.getProductByCatalog(this.catalog[7]).subscribe(
      (response: Product[]) => {
        this.catalogSportswear = response;
      }
    )
  }

  getProductHypeBeastsCatalog() {
    this.productService.getProductByCatalog(this.catalog[8]).subscribe(
      (response: Product[]) => {
        this.catalogHypeBeasts = response;

      }
    )
  }



  // slider
  // defaultTransform
  // goNext() {
  //   this.defaultTransform = this.defaultTransform - 398;
  //   if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
  //   this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  // }
  // goPrev() {
  //   if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
  //   else this.defaultTransform = this.defaultTransform + 398;
  //   this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  // }



}
