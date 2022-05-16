import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";


interface ButtonNumberPaginationProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void
}

export function ButtonNumberPagination({
  isCurrent = false,
  number,
  onPageChange
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
      _hover={{ bg: "gray.onClick500" }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
