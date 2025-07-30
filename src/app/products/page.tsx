"use client";
import { ProductsList } from "@/components/products/ProductsList";
import { ProductType } from "@/components/products/types";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await fetch("https://fakestoreapi.com/products").then(res => res.json());
      setProducts(data);
    }

    fetchProducts();
  }, []);
  return (
    <div className="d-flex justify-content-center flex-wrap p-2 gap-3">
      <ProductsList products={products} />
    </div>
  );
}
