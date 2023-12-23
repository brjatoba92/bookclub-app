import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { CategoryCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { getCategories } from 'services/api/requests'

export const CategoryList = () => {
    const [selected, setSelected] = useState()
    const { data } = useQuery('category', getCategories)

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
        >
            <Text.ScreenTitle  >Categorias</Text.ScreenTitle>
            <Flex flexDir='row' mt='16px'>
                {data?.data && data?.data?.map((item) => (
                  <CategoryCard
                    key={`book_${item.id}`}
                    selected={selected === item.id}
                    {...item}
                  />
                ))}
            </Flex>
        </Flex>
    )
}
