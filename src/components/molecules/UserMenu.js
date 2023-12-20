import { Text } from 'components/atoms'
import { Avatar, Menu, MenuList, MenuButton, MenuItem, Flex, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const UserMenu = () => {
    const userStore = useSelector((state) => state.user)
    // console.log({ userStore })
    return(
        <Menu>
            <MenuButton>
                <Flex alignItems='center' justifyContent='center' flexDir='row'>
                    <Avatar
                      size='md'
                      name={userStore?.user?.name}
                      src={userStore?.user?.avatar_url}
                      borderColor='brand.primary'
                      borderWidth='2px'
                      bg='brand.grayDark'
                      mr='12px'
                    />
                    <Text maxLenght='40px' fontWeight='bold' fontSize='20px'>
                      {userStore?.user?.name}
                    </Text>
                    <ChevronDownIcon boxSize='24px' />
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem>
                  <Flex flexDir='row' alignItems='center' justifyContent='center'>
                    <Image src='/imgs/icons/bookmark-outline.svg' alt='bookmark' boxSize='18px' mr='10px' />
                    Favoritos
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex flexDir='row' alignItems='center' justifyContent='center'>
                    <Image src='/imgs/icons/person-outline.svg' alt='bookmark' boxSize='18px' mr='10px' />
                    Dados pessoais
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex flexDir='row' alignItems='center' justifyContent='center'>
                    <Image src='/imgs/icons/shield-checkmark-outline.svg' alt='bookmark' boxSize='18px' mr='10px' />
                    Alterar senha
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex flexDir='row' alignItems='center' justifyContent='center'>
                    <Image src='/imgs/icons/document-text-outline.svg' alt='bookmark' boxSize='18px' mr='10px' />
                    Termos de uso
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex flexDir='row' alignItems='center' justifyContent='center'>
                    <Image src='/imgs/icons/clipboard-outline.svg' alt='bookmark' boxSize='18px' mr='10px' />
                    Politica de provacidade
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex flexDir='row' alignItems='center' justifyContent='center'>
                    <Image src='/imgs/icons/log-out-outline.svg' alt='bookmark' boxSize='18px' mr='10px' />
                    Sair
                  </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
