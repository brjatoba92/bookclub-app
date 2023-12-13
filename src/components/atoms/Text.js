import { Text as ChakraText } from '@chakra-ui/react'

export const Text = ({ children, ...props }) => (
  <ChakraText { ...props } > { children } </ChakraText>
)

Text.ScreenTitle =  ({ children, ...props }) => (
    <ChakraText
      color='brand.black'
      fontSize='20px'
      fontWeight='800'
      {...props} 
    > 
      { children }
    </ChakraText>
)

Text.ScreenTitle.displayName = 'ScreenTitle'
