import { Outlet } from "react-router-dom";
import Header from "../components/main/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
