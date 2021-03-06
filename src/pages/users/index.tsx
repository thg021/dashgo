import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Checkbox,
  Td,
  Text,
  useBreakpointValue,
  Spinner,
  Link,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import NextLink from "next/link";
import { useState } from "react";


import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList({ users }) {

  const [page, setPage] = useState(1)
  const {data, isLoading, isFetching, error} = useUsers(page, {
    initialData: users
  })

  const isWideScreenVersion = useBreakpointValue({
    base: false, //
    lg: true,
  });

  async function handlePrefetchUser(userId: string){
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    })
  }
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "4", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
            <NextLink href="/users/create" passHref>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

         {
           isLoading ? (
             <Flex justify={"center"}>
               <Spinner/>
             </Flex>
           ) : error ? (
             <Flex justify={"center"}>
                <Text>Ocorreu um erro ao carregar os dados!</Text>
              </Flex>
           ): (
          <>
            <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideScreenVersion && <Th>Data de Cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data.users.map(user => (
                  <Tr key={user.id}>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                      <Text fontWeight="bold">{user.name}</Text>
                    </Link>
                    <Text fontSize="sm" color="gray.300">
                      {user.email}
                    </Text>
                  </Box>
                </Td>
                {isWideScreenVersion && <Td>{user.createdAt}</Td>}
                <Td>
                  {isWideScreenVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="green"
                      leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
                ))
              }
            </Tbody>
          </Table>
          <Pagination totalCountOfRegister={data.totalCount} currentPage={page} onPageChange={setPage}/>
        </>
           )
         }

          
        </Box>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const {users, totalCount} = await getUsers(1)

  return {
    props: {
      users, totalCount
    }
  }
}