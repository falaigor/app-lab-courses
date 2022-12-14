import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LayoutContainer, LayoutWrapper } from "./styles";

export const ClassroomLayout = () => {
  return (
    <LayoutContainer>
      <Header />

      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </LayoutContainer>
  );
};
