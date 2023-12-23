import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { CategoryCard, BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { getCategories, getBooksByCategory } from 'services/api/requests'

export const CategoryList = () => {
    const [selected, setSelected] = useState()
    const { data } = useQuery('category', getCategories)
    const booksQuery = useQuery(['booksById',selected], () => 
      getBooksByCategory(selected)
    )
    console.log({ booksQuery })

    useEffect(()=> {
        if(!selected && data?.data){
            setSelected(data?.data[0].id)
        }
    }, [data])

    return (
        <Flex
          mt='38px'
          paddingX={['24px', '48px', '80px', '112px']}
          flexDir='column'
          h='400px'
        >
            <Text.ScreenTitle  >Categorias</Text.ScreenTitle>
            <Flex flexDir='row' mt='16px'>
                {data?.data && data?.data?.map((item) => (
                  <CategoryCard
                    key={`book_${item.id}`}
                    selected={selected === item.id}
                    onClick={() => setSelected(item.id)}
                    {...item}
                  />
                ))}
            </Flex>
            <Flex flexDir='row' mt='26px' paddingBottom='48px'>
                {booksQuery?.data &&
                  booksQuery?.data?.data.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
            </Flex>
        </Flex>
    )
}
