import {
  Flex,
  Box,
  Heading,
  Text,
  Badge,
  SimpleGrid,
  Link,
  LinkBox,
  LinkBoxProps,
  LinkOverlay
} from '@chakra-ui/react';
import Head from 'next/head';

export default function IndexPage() {
  const superBoxStyle: LinkBoxProps = {
    bg: 'white',
    py: 4,
    px: 5,
    rounded: 'md',
    shadow: 'sm',
    fontSize: 'xl',
    fontWeight: '500',
    border: '2px solid',
    borderColor: 'white',
    transition: 'all 0.2s',
    isTruncated: true,
    position: 'relative',
    _before: {
      content: '"→"',
      transition: 'all 0.4s',
      opacity: 0,
      fontSize: '2xl',
      color: 'pink.400',
      bg: 'white',
      position: 'absolute',
      right: 5,
      top: 2.5
    },
    _hover: {
      borderColor: 'pink.400',
      color: 'pink.400',
      shadow: 'md',
      _before: { opacity: 1, right: 3 }
    }
  }
  return <>
    <Head>
      <title>Success!</title>
    </Head>
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      w="100vw"
      bg="gray.100"
    >
      <Box maxW="2xl" w="100%" p={2}>
        <Box shadow="sm" bg="white" py={5} px={6} rounded="md" w="100%">
          <Heading color="pink.400">Success!</Heading>
          <Text fontSize="lg" fontWeight="500">You are now using <Badge>Next.JS</Badge> + <Badge colorScheme="blue">TypeScript</Badge> + <Badge colorScheme="green">Chakra UI</Badge></Text>
        </Box>
        <SimpleGrid mt={5} columns={2} spacing={5}>
          <LinkBox {...superBoxStyle}>
            <LinkOverlay isExternal href="https://reactjs.org/docs/getting-started.html">
              React Documentation
            </LinkOverlay>
          </LinkBox>
          <LinkBox {...superBoxStyle}>
            <LinkOverlay isExternal href="https://nextjs.org/docs">
              Next.JS Documentation
            </LinkOverlay>
          </LinkBox>
          <LinkBox {...superBoxStyle}>
            <LinkOverlay isExternal href="https://chakra-ui.com/docs">
              Chakra UI Documentation
            </LinkOverlay>
          </LinkBox>
          <LinkBox {...superBoxStyle}>
            <LinkOverlay isExternal href="https://www.typescriptlang.org/docs/">
              TypeScript Documentation
            </LinkOverlay>
          </LinkBox>
        </SimpleGrid>
        <Link
          display="block"
          color="gray.500"
          mt={10} fontSize="sm"
          textAlign="right"
          href="https://github.com/AshMW2724/nextjs-typescript-chakra"
          isExternal
        >
          Make sure to ⭐ the repository on GitHub!
        </Link>
      </Box>
    </Flex>
  </>
}