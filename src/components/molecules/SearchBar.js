import {
    Flex,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'

export const SearchBar = ({ query, setQuery }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const checkIfIsOnSearchScreen = () => {
      if(location.pathname !== '/search' ){
        navigate('/search')
      }
    }

    return(
        <Flex w='478px' h='52px' bg='brand.grayLight' borderRadius='12px'>
            <InputGroup>
              <InputLeftElement h='100%'>
                <SearchIcon color='brand.grayDark' />
              </InputLeftElement>
              <Input
                onFocus={() => checkIfIsOnSearchScreen()}
                value={query || ''}
                onChange={(e) => (setQuery ? setQuery(e.target.value) : {})}
                w='100%'
                h='100%'
                fontSize='16px'
                placeholder='Digite o nome do livro ou autor'
                _placeholder={{ color: 'brand.grayDark' }}
                borderWidth='0px'
                focusBorderColor='transparent'
              />
            </InputGroup>
        </Flex>
    )
}
