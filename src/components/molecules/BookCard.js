import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'

export const BookCard = ({ cover_url, name, author }) => {
    return (
        <Flex flexDir='column' alignItems='center' justifyContent='center' mr='16px'>
            <Flex
              backgroundImage={`url(${cover_url})`}
              backgroundSize='cover'
              backgroundPosition='center'
              h='230px'
              w='154px'
              borderRadius='12px'
            />
            <Text
              fontSize='12px'
              fontWeight='600'
              mt='12px'
            >
                {name}
            </Text>
            <Text
              fontSize='10px'
              fontWeight='500'
              color='brand.grayDark'
              mt='6px'
            >
                {author?.name}
            </Text>
        </Flex>
    )
}