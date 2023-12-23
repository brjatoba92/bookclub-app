import { Flex } from '@chakra-ui/react'
import { CategoryCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { useQuery } from 'react-query'
import { getCategories } from 'services/api/requests'

export const CategoryList = () => {
    const { data } = useQuery('category', getCategories)
    return (
        <Flex
          mt='38px'
          paddingX={['24px', '48px', '80px', '112px']}
          flexDir='column'
        >
            <Text.ScreenTitle  >Categorias</Text.ScreenTitle>
            <Flex flexDir='row' mt='16px'>
                {data?.data && data?.data?.map((item) => (
                  <CategoryCard key={`book_${item.id}`} {...item} />
                ))}
            </Flex>
        </Flex>
    )
}
