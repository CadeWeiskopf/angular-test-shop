package com.example.demo;

public enum ProductCategory {
    T_SHIRT("T-Shirt"),
    PANTS("Pants");

    private final String value;

    private ProductCategory(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
} 
