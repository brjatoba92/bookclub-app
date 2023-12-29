import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const AuthorCard = ({ id, avatar_url, name }) => {
    const navigate = useNavigate()
    return (
        <Flex
          flexDir='column'
          alignItems='center'
          justifyContent='center'
          mr={['40px','16px']}
          mb='16px'
        >
            <Flex
              backgroundImage={`url(${avatar_url})`}
              backgroundSize='cover'
              backgroundPosition='center'
              h={['180px','230px']}
              w={['120px','154px']}
              borderRadius={['8px','12px']}
              cursor='pointer'
              onClick={() => navigate(`/author-detail/${id}`)}
            />
            <Text
              maxWidth={['120px', '154px']}
              fontSize='12px'
              fontWeight='600'
              mt='8px'
              textAlign='center'
              noOflines={1}
            >
                {name}
            </Text>
        </Flex>
    )
}