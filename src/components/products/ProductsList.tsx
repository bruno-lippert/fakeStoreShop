import React from "react";
import { ProductType } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Button, ListGroup } from "react-bootstrap";

interface ProductCardProps {
  products: ProductType[];
}

export function ProductsList({ products }: ProductCardProps) {
  return (
    <ListGroup className="list-group mt-5">
      {products.map((product) => (
        <ListGroup.Item
          key={product.id}
          className="list-group-item d-flex flex-wrap align-items-start gap-3"
          style={{ minHeight: "120px" }}
        >
          {/* thumbnail fixa */}
          <div>
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
              style={{ borderRadius: "5px" }}
            />
          </div>

          {/* conteúdo */}
          <div className="flex-grow-1">
            <h6 className="mb-1">{product.title}</h6>
            <p className="mb-1 text-success fw-bold">
              $ {product.price.toFixed(2)}
            </p>
            <p className="mb-1" style={{ fontSize: "0.9rem" }}>
              {product.description.length > 80
                ? product.description.slice(0, 80) + "…"
                : product.description}
            </p>
          </div>

          <div className="d-flex flex-column gap-1">
            <Link
              href={`${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}`}
              className="btn btn-sm btn-outline-primary align-self-center w-100"
            >
              Show
            </Link>
            <Button variant="outline-success" size="sm">
              Add to Cart
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
