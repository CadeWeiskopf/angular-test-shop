package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    final private Product[] ALL_PRODUCTS =  {
        new Product(
            "1",
            "tiedyetshirt", 
            "Tie Dye T-Shirt", 
            ProductCategory.T_SHIRT, 
            "20"
        ),
        new Product(
            "2",
            "khakis", 
            "Khakis", 
            ProductCategory.PANTS, 
            "75.75"
        ),
    };

    @GetMapping("/products")
    public Product[] products() {
        return ALL_PRODUCTS;
    }
}
