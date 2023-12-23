import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { useQuery } from 'react-query'
import { getHightlightedBooks } from 'services/api/requests'

export const BookList = () => {
    const { data } = useQuery(
        'highlighted',
        getHightlightedBooks
    )
    return (
        <Flex
          mt={['24px','48px']}
          paddingX={['24px', '48px', '80px', '112px']}
          flexDir='column'
          
        >
            <Text.ScreenTitle >Destaques</Text.ScreenTitle>
            <Flex
              flexDir='row'
              mt={['12px', '24px']}
              overflowX={['scroll', 'auto']}
              css={{
                '::-webkit-scrollbar': {
                    display: 'none'
                }
              }}
            >
                {data?.data &&
                  data?.data.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
            </Flex>
        </Flex>
    )
}
