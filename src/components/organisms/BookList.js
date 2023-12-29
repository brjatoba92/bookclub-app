import { Flex, Spinner } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
// import { useQuery } from 'react-query'
// import { getHightlightedBooks } from 'services/api/requests'

export const BookList = ({ title, data, isLoading }) => {
    // const { data } = useQuery('highlighted', getHightlightedBooks)
    return (
        <Flex
          mt={['24px','48px']}
          paddingX={['24px', '48px', '80px', '112px']}
          flexDir='column'
          overflowX={['scroll', 'auto']}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
            <Text.ScreenTitle >{title}</Text.ScreenTitle>
            <Flex flexDir='row' mt={['12px', '24px']}>
              {
                isLoading && (
                  <Flex alignItems='center' justifyContent='center' h='230px'>
                    <Spinner />
                  </Flex>
                )
              }
              {!data ||
                  (!isLoading && data?.length === 0 && (
                    <Flex alignItems='center' justifyContent='center' h='30px'>
                      <Text>Nenhum livro encontrado</Text>
                    </Flex>
                  ))}
              {data &&
                data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
            </Flex>
        </Flex>
    )
}
