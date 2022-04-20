import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <FormControl>
                <FormLabel htmlFor="name">Nome completo</FormLabel>
                <Input name="name" id="name" />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input name="email" type="email" id="email" />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <FormControl>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Input name="password" type="password" id="password" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password_confirmation">
                  Confirmação de senha
                </FormLabel>
                <Input
                  name="password"
                  type="password"
                  id="password_confirmation"
                />
              </FormControl>
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
