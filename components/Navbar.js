// import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full text-center mx-auto">
      <nav className="p-4 space-x-5 ">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="register">
          <a>Registration</a>
        </Link>
        <Link href="#speaker">
          <a>Speaker</a>
        </Link>
        <Link href="#session">
          <a>Session</a>
        </Link>
        <Link href="#topics">
          <a>Topics</a>
        </Link>
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
