import { ProductType } from "@/components/products/types";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProduct(id: string): Promise<ProductType | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  return res.json();
}

export default function Product() {
  return <div>teste</div>;
}
