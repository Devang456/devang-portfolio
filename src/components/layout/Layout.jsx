import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="portfolio-layout">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

