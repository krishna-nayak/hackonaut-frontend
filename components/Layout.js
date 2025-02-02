import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hack‘O’naut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div>
          {/* className="max-w-md mx-auto" */}
          <main className="mx-auto">{children}</main>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
