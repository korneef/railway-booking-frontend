import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../widgets/index";

export default function Layout() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}