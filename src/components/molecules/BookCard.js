import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const BookCard = ({ id, cover_url, name, author }) => {
    const navigate = useNavigate()
    return (
        <Flex flexDir='column' alignItems='center' justifyContent='center' mr='16px'>
            <Flex
              backgroundImage={`url(${cover_url})`}
              backgroundSize='cover'
              backgroundPosition='center'
              h={['180px','230px']}
              w={['120px','154px']}
              borderRadius={['8px','12px']}
              cursor='pointer'
              onClick={() => navigate(`/book-detail/${id}`)}
            />
            <Text
              fontSize='12px'
              fontWeight='600'
              mt='8px'
              textAlign='center'
              noOflines={1}
            >
                {name}
            </Text>
            <Text
              fontSize='10px'
              mt='6px'
              textAlign='center'
            >
                {author?.name}
            </Text>
        </Flex>
    )
}