import { Flex } from '@chakra-ui/react'
// import { useSelector } from 'react-redux'
import { NavBar } from 'components/organisms'
import { useQuery } from 'react-query'
import { getHightlightedBooks } from 'services/api/requests'

export const HomeScreen = () => {
    // const userStore = useSelector((state) => state.user)
    const { error, data } = useQuery(
        'highlighted',
        getHightlightedBooks
    )
    console.log({ error, data })

    return (
        <Flex flexDir='column'>
            <NavBar />
            <Flex
              w='100%'
              h='200px'
              paddingX={['24px', '48px', '80px', '112px']}
              mt='38px'
            >
              <Flex
                w='100%'
                h='100%'
                backgroundImage="url('/imgs/banner.svg')"
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                borderRadius='24px'
              />
            </Flex>
        </Flex>
    )
}
