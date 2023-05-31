import React from "react";
import Link from "next/link";
import Button from "./Button";
import { FaCreativeCommonsBy } from "react-icons/fa";
import styles from "./page.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <FaCreativeCommonsBy className={styles.logo} />
      </Link>

      <Button title="Projects" link="/projects">
        projects
      </Button>

      <Button title="Contact" link="/contact">
        Contact
      </Button>
    </nav>
  );
};

export default Navbar;
