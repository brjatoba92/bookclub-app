import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
    <ChakraButton
      borderRadius='16px'
      h='56px'
      fontWeight='700'
      fontSize='16px'
      bg='brand.primary'
      _hover={{
        bg: 'brand.primary'
      }}
      {...props}
    >
        {children}
    </ChakraButton>
)