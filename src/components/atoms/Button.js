import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
    <ChakraButton
      borderRadius='16px'
      h='56px'
      fontWeight='700'
      fontSize='16px'
      bg={secondary ? 'brand.grayDark' : 'brand.primary'}
      _hover={{
        bg: secondary ? 'brand.grayDark' : 'brand.primary'
      }}
      textColor={secondary? 'brand.white' : 'brand.black'}
      {...props}
    >
        {children}
    </ChakraButton>
)