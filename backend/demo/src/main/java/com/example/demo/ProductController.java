package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    final private Product[] ALL_PRODUCTS =  {
        new Product(
            "1",
            "tiedyetshirt", 
            "Tie Dye T-Shirt", 
            ProductCategory.T_SHIRT, 
            20.0
        ),
        new Product(
            "2",
            "khakis", 
            "Khakis", 
            ProductCategory.PANTS, 
            75.75
        ),
    };

    @GetMapping("/products")
    public Product[] getProducts() {
        return ALL_PRODUCTS;
    }

    @GetMapping("/product/{slug}")
    public Product getProductBySlug(@PathVariable String slug) throws Exception {
        for (int i = 0; i < ALL_PRODUCTS.length; i++) {
            if (ALL_PRODUCTS[i].slug() == slug) {
                return ALL_PRODUCTS[i];
            }
        }
        throw new Exception("Product not found by slug");
    }    
}
