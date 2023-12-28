import { Flex } from '@chakra-ui/react'
import { NavBar } from 'components'

export const SearchScreen = () => {
    return(
        <Flex flexDir='column'>
          <NavBar/>
          <Flex
            flexDir='column'
            alignItems='flex-start'
            justifyContent='flex-start'
            mt='48px'
            w='100%'
            maxW='100vw'
            paddingX={['24px', '48px', '80px', '112px']}
          >

          </Flex>
        </Flex>
    )
}