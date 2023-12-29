import { Flex, Spinner } from '@chakra-ui/react'
import { AuthorCard } from 'components/molecules'
import { Text } from 'components/atoms'
// import { useQuery } from 'react-query'
// import { getHightlightedBooks } from 'services/api/requests'

export const AuthorList = ({ data, isLoading }) => {
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
            <Text.ScreenTitle >Autores</Text.ScreenTitle>
            <Flex flexDir='row' mt={['12px', '24px']}>
              {
                isLoading && (
                  <Flex alignItems='center' justifyContent='center' h='230px'>
                    <Spinner />
                  </Flex>
                )
              }
              {(!isLoading && data?.lenght === 0) ||
                  (!data && (
                    <Flex alignItems='center' justifyContent='center' h='30px'>
                      <Text>Nenhum autor encontrado</Text>
                    </Flex>
                  ))}
              {data &&
                data?.map((item) => <AuthorCard key={`author_${item.id}`} {...item} />)}
            </Flex>
        </Flex>
    )
}
