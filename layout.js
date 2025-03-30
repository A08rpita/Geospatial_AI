
import Navbar from "./components/Navbar";
import "./styles/globals.css"; // Import global styles

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

