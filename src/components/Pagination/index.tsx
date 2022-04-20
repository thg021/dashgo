import { Box, Button, Stack } from "@chakra-ui/react";
import { ButtonNumberPagination } from "./ButtonNumberPagination";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0 </strong> - <strong>10</strong> de <strong> 100 </strong>
      </Box>
      <Stack direction="row" spacing="2">
        <ButtonNumberPagination isCurrent={true} number={1} />
        <ButtonNumberPagination number={2} />
        <ButtonNumberPagination number={3} />
        <ButtonNumberPagination number={4} />
        <ButtonNumberPagination number={5} />
        <ButtonNumberPagination number={6} />
      </Stack>
    </Stack>
  );
}
