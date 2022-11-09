import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer, LayoutWrapper } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />

      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </LayoutContainer>
  );
};
