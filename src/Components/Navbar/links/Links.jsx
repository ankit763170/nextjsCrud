"use client";
import Link from "next/link";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import styles from "./links.module.css";
import Navbar from "../Navbar";
import Image from "next/image";

function Links() {
  const [open, setOpen] = useState(false); // Change Open to open
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = false;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>LogOut</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* Conditionally render menuButton based on screen size */}
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
