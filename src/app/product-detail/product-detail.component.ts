import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, products } from '../data/data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: IProduct;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const productDetails = products.find((product) => product.slug === slug);
      if (!productDetails) {
        throw Error('could not find product by slug');
      }
      console.log(`product details`, productDetails);
      this.product = productDetails;
    });
  }
}
