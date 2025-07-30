"use client";
import React from "react";
import {
  Navbar,
  Offcanvas,
  Nav,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import SlideButton from "../buttons/SlideButton";
import Link from "next/link";

export function Navigation() {
  return (
    <Navbar expand={false} bg="dark" variant="dark" fixed="top">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <SlideButton />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          bg="dark"
          className="text-bg-dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Fake Store
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                href="/products"
                className={`link-light link-underline link-underline-opacity-0`}
              >
                Products
              </Link>
              <Link
                href="/cart"
                className={`link-light link-underline link-underline-opacity-0`}
              >
                Cart
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  );
}
