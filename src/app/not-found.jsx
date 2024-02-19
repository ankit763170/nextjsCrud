import Link from "next/link";
import React from "react";

function notfound() {
  return (
    <>
      <h2>not-found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href={"/"}>Return to homePage</Link>
    </>
  );
}

export default notfound;
