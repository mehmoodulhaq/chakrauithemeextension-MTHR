import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react'
import { ChakraNestedProvider } from '../ChakraNestedProvider'

export const Section = ({ children, heading, description, theme, ...rest }) => {
  // If no theme is passed in, then use the default theme which was passed to
  // the main ChakraProvider.
  // If a theme is provided it is expected to already be an extended full theme
  const defaultTheme = useTheme()
  const sectionTheme = theme ? theme : defaultTheme

  const id = 'section-id-' + Date.now()

  return (
    <Box
      id={id}
      borderColor={useColorModeValue('gray.700', 'blue.200')}
      borderWidth={0}
      boxShadow={useColorModeValue('1px 1px 8px gray', '1px 1px 8px skyblue')}
      bg={useColorModeValue('gray.50', 'gray.700')}
      py={4}
      mt={5}
      ml={2}
      borderRadius={10}
      {...rest}
      as='section'
      w='96.5%'
    >
      <ChakraNestedProvider theme={sectionTheme} cssVarsRoot={'#' + id}>
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='center'
          mt={3}
        >
          <Heading as='h3' fontSize={18}>
            {heading}
          </Heading>
          <Text>{description}</Text>
        </Flex>
        {children}
      </ChakraNestedProvider>
    </Box>
  )
}
