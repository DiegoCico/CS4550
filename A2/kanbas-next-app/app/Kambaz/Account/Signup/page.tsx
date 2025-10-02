"use client";

import Link from "next/link";
import { Form, FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="mx-auto" style={{ maxWidth: 360 }}>
      <h4 className="mb-3">Signup</h4>
      <Form>
        <FormControl placeholder="username" className="mb-2" />
        <FormControl type="password" placeholder="password" className="mb-2" />
        <FormControl type="password" placeholder="verify password" className="mb-3" />
        <Link href="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2">
          Signup
        </Link>
        <Link href="/Kambaz/Account/Signin">Signin</Link>
      </Form>
    </div>
  );
}
