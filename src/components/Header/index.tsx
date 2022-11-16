import { HeaderContainer, HeaderWrapper } from "./styles";
import { MenuAccount } from "./MenuAccount";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src="/logo.svg" alt="logo" />

        <MenuAccount />
      </HeaderWrapper>
    </HeaderContainer>
  );
};
