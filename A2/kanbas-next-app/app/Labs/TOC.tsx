"use client";

import { Nav } from "react-bootstrap";
import Link from "next/link";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link as={Link} href="/Labs" id="wd-home-link">
          Labs
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab1" id="wd-lab1-link">
          Lab 1
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab2" id="wd-lab2-link">
          Lab 2
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab3" id="wd-lab3-link">
          Lab 3
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} href="/Kambaz" id="wd-kambaz-link">
          Kambaz
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          href="https://github.com/DiegoCico/CS4550/tree/main/A2/kanbas-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
