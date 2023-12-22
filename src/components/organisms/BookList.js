import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const BookList = ({data, error, isLoading}) => {
    return (
        <Flex mt='48px' paddingX={['24px', '48px', '80px', '112px']} flexDir='column'>
            <Text.ScreenTitle mb='20px' >Destaques</Text.ScreenTitle>
            <Flex flexDir='row'>
                {data && data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
            </Flex>
        </Flex>
    )
}
