import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Meta />
        <nav>
          <Nav />
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
