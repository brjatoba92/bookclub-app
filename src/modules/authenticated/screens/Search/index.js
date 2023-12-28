import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { NavBar, Text } from 'components'

export const SearchScreen = () => {
    const [query, setQuery] = useState('')
    return(
        <Flex flexDir='column'>
          <NavBar query={query} setQuery={setQuery}/>
          <Flex
            flexDir='column'
            alignItems='flex-start'
            justifyContent='flex-start'
            mt='48px'
            w='100%'
            maxW='100vw'
            paddingX={['24px', '48px', '80px', '112px']}
          >
            <Text.ScreenTitle>Livros</Text.ScreenTitle>
          </Flex>
        </Flex>
    )
}