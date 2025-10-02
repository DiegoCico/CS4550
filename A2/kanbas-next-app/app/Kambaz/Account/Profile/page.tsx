"use client";

import Link from "next/link";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="mx-auto" style={{ maxWidth: 360 }}>
      <h4 className="mb-3">Profile</h4>
      <Form>
        <Form.Control defaultValue="alice" className="mb-2" placeholder="username" />
        <Form.Control defaultValue="123" className="mb-2" placeholder="password" type="password" />
        <Form.Control defaultValue="Alice" className="mb-2" placeholder="first name" />
        <Form.Control defaultValue="Wonderland" className="mb-2" placeholder="last name" />
        <Form.Control className="mb-2" placeholder="mm/dd/yyyy" type="date" />
        <Form.Control defaultValue="alice@wonderland.com" className="mb-2" placeholder="email" type="email" />
        <Form.Select defaultValue="User" className="mb-3">
          <option>User</option>
          <option>Faculty</option>
          <option>TA</option>
        </Form.Select>
        <div className="d-grid">
          <Link href="/Kambaz/Account/Signin" passHref legacyBehavior>
            <Button as="a" variant="danger">Signout</Button>
        </Link>
        </div>
      </Form>
    </div>
  );
}
