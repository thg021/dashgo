import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { ButtonNumberPagination } from "./ButtonNumberPagination";

interface PaginationProps {
  totalCountOfRegister: number;
  registersPerPage?: number;
  currentPage?:number;
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number){
  return [...new Array(to - from)]
          .map((_, index) => {
            return from + index + 1
          })
          .filter(page => page > 0)
}

export function Pagination({ 
  totalCountOfRegister, 
  registersPerPage = 10, 
  currentPage = 1, 
  onPageChange }: PaginationProps) {

    //numero total possiveis de paginas 
    const lastPage = Math.floor(totalCountOfRegister / registersPerPage);

    //Formato da paginaçao 1 ... 4 5 6 ... 20
    const previousPage = currentPage > 1 
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1 )
      : []

    const nextPages = currentPage < lastPage
      ? generatePagesArray(currentPage , Math.min(currentPage + siblingsCount, lastPage))
      : []

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

        {
          currentPage > (1 + siblingsCount) && (
            <>
              <ButtonNumberPagination onPageChange={onPageChange} number={1} />
              {
                currentPage > ( 2 + siblingsCount) && (
                  <Text color="gray.300" width="8" textAlign="center">...</Text>
                )
              }
            </>
          )
        }


        {
          previousPage.length > 0 && previousPage.map(page => {
            return <ButtonNumberPagination onPageChange={onPageChange} key={page} number={page} />
          })
        }
        <ButtonNumberPagination onPageChange={onPageChange} isCurrent number={currentPage} />
      
        {
          nextPages.length > 0 && nextPages.map(page => {
            return <ButtonNumberPagination onPageChange={onPageChange} key={page} number={page} />
          })
        }


      {
          (currentPage + siblingsCount) < lastPage && (
            <>
              {
                (currentPage + 1 + siblingsCount) < lastPage && (
                  <Text color="gray.300" width="8" textAlign="center">...</Text>
                )
              }
              <ButtonNumberPagination onPageChange={onPageChange} number={lastPage} />
            </>
          )
        }
      </Stack>
    </Stack>
  );
}
