import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import ScrollToTop from "../components/layout/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="py-8">
        <Container>
          <ScrollToTop>
            <Outlet />
          </ScrollToTop>
        </Container>
      </main>
    </>
  );
};

export default MainLayout;