import {
  Icon,
  Link as ChackraLink,
  Text,
  LinkProps as ChakraLinksProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinksProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink display="flex" py="1" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChackraLink>
    </ActiveLink>
  );
}
