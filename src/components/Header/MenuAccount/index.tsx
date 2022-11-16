import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown, SignOut } from "phosphor-react";
import {
  AccountContainer,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  IconButton,
} from "./styles";

export function MenuAccount() {
  return (
    <AccountContainer>
      <img src="/logo.svg" alt="logo" />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <IconButton aria-label="Customise options">
            <CaretDown size={25} weight="fill" />
          </IconButton>
        </DropdownMenu.Trigger>

        <DropdownMenuPortal>
          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuItem>Meu perfil</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <SignOut size={20} />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu.Root>
    </AccountContainer>
  );
}
