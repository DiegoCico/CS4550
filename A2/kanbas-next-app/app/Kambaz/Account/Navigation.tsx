"use client";

import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-nav" style={{ width: 140 }}>
      <ul className="list-unstyled m-0 p-0">
        <li className="py-2">
          <Link
            href="/Kambaz/Account/Signin"
            className="d-block px-2 fw-semibold text-dark border-start border-3 border-dark"
          >
            Signin
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/Kambaz/Account/Signup"
            className="d-block px-2 text-danger text-decoration-none"
          >
            Signup
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/Kambaz/Account/Profile"
            className="d-block px-2 text-danger text-decoration-none"
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
