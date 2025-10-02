"use client";

import Link from "next/link";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="mx-auto" style={{ maxWidth: 360 }}>
      <h4 className="mb-3">Signin</h4>
      <Form>
        <FormControl id="wd-username" placeholder="username" className="mb-2" />
        <FormControl id="wd-password" type="password" placeholder="password" className="mb-2" />
        <Link
          id="wd-signin-btn"
          href="/Kambaz/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Signin
        </Link>
        <Link id="wd-signup-link" href="/Kambaz/Account/Signup">Signup</Link>
      </Form>
    </div>
  );
}
