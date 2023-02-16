import { Outlet } from "react-router-dom";
import Header from "widgets/header/header";
import Footer from "widgets/footer/footer";

export default function Layout() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}