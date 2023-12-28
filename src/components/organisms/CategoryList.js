import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex, Spinner } from '@chakra-ui/react'
import { CategoryCard, BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { getCategories, getBooksByCategory } from 'services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
    const [selected, setSelected] = useState(categoryId)
    const { data } = useQuery('category', getCategories)
    const { data: bookQuery, refetch, isLoading } = useQuery(
      ['booksById',selected], 
      () => getBooksByCategory(selected),
      {
        enabled: !!selected
      }
    )
    // console.log({ booksQuery })

    useEffect(()=> {
        if(!selected && data?.data){
            setSelected(data?.data[0].id)
        }
    }, [data])

    useEffect(() => {
      refetch()
    }, [categoryId])

    return (
        <Flex
          mt='38px'
          paddingX={['24px', '48px', '80px', '112px']}
          flexDir='column'
          h='520px'
        >
            <Text.ScreenTitle>{title || 'Categorias' }</Text.ScreenTitle>
            {!categoryId && (
              <Flex
                flexDir='row'
                mt='16px'
                overflowX={['scroll', 'auto']}
                overflowY='hidden'
                css={{
                  '::-webkit-scrollbar': {
                      display: 'none'
                  }
                }}
              >
                  {data?.data && data?.data?.map((item) => (
                    <CategoryCard
                      key={`book_${item.id}`}
                      selected={selected === item.id}
                      onClick={() => setSelected(item.id)}
                      {...item}
                    />
                  ))}
              </Flex>
            )}
            <Flex
              flexDir='row'
              mt='26px'
              paddingBottom='48px'
              overflowX={['scroll', 'auto']}
              css={{
                '::-webkit-scrollbar': {
                    display: 'none'
                }
              }}
            >
              {isLoading && 
              <Flex h='230px' alignItems='center' justifyContent='center'>
                <Spinner />
              </Flex>
              }
              {
                !isLoading && bookQuery && bookQuery?.data?.length === 0 &&
                <Flex h='230px' alignItems='center' justifyContent='center'>
                  <Text>Nenhum livro relacionado</Text>
                </Flex>
              }
              {bookQuery &&
                bookQuery?.data.map((item) => (<BookCard key={`book_${item.id}`} {...item} />))}
            </Flex>
        </Flex>
    )
}
