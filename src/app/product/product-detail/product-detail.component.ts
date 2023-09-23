import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, getProducts } from '../../data/server-requests';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;

  loading = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.product) {
      throw Error('No product set on product detail component');
    }

    const getProductBySlug = async (slug: string) => {
      // TODO: replace with request by slug?
      const products = await getProducts();
      const productDetails = products.find((product) => product.slug === slug);
      if (!productDetails) {
        throw Error('could not find product by slug');
      }
      console.log(`product details`, productDetails);
      this.product = productDetails;
      this.loading = false;
    };

    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (!slug) {
        throw Error('product has no slug');
      }
      getProductBySlug(slug);
    });
  }
}
