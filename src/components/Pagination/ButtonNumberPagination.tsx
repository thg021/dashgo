import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

// interface ButtonNumberPaginationProps extends ChakraButtonProps {
//   bg: string;
//   children: string;
// }

// export function ButtonNumberPagination({ bg, children, ...rest }: ButtonProps) {
//   return (
//     <Button size="sm" fontSize="xs" width="4" bg={bg} {...rest}>
//       {children}
//     </Button>
//   );
// }

interface ButtonNumberPaginationProps {
  isCurrent?: boolean;
  number: number;
}

export function ButtonNumberPagination({
  isCurrent = false,
  number,
}: ButtonNumberPaginationProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
}
