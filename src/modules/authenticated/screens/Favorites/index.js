import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookCard } from 'components'
import { getFavorites } from 'services/api/requests'
import { useQuery } from 'react-query'

export const FavoritesScreen = () => {
    const { data } = useQuery('getFavorites', getFavorites)
    return(
        <Flex flexDir='column'>
            <NavBar></NavBar>
            <Flex
              paddingX={['24px', '48px', '80px', '112px']}
              mt={['24px','48px']}
              w='100%'
              flexDir='column'
            >
              <Text.ScreenTitle>Favoritos</Text.ScreenTitle>
              <Flex
                w='100%'
                flexDir='row'
                mt='26px'
                flexWrap='wrap'
                alignItems={['center', 'flex-start']}
                justifyContent={['center', 'flex-start']}
              >
                {data?.data?.map(item => <BookCard key={`book_list_favorites_${item.book.id}`} {...item.book} />)}
              </Flex>
            </Flex>
        </Flex>
    )

}

