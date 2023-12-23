import { Flex } from '@chakra-ui/react'
// import { useSelector } from 'react-redux'
import { NavBar, BookList, CategoryList } from 'components/organisms'

export const HomeScreen = () => {
    // const userStore = useSelector((state) => state.user)
    // console.log({ error, data })

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
            <BookList  />
            <CategoryList />

        </Flex>
    )
}
