import { Outlet } from "react-router-dom";
import { LayoutContainer, LayoutWrapper } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </LayoutContainer>
  );
};
