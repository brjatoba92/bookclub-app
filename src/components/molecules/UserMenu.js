import { Text, MenuItem } from 'components/atoms'
import { Avatar, Menu, MenuList, MenuButton, Flex} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkStar, BsPersonCheckFill, BsShieldCheck } from 'react-icons/bs'
import { BiLogOut, BiClipboard } from "react-icons/bi"
import { HiOutlineDocumentText } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export const UserMenu = () => {
    const userStore = useSelector((state) => state.user)
    const navigate = useNavigate()
    // console.log({ userStore })
    const menuOptions = [{
      id: 0,
      icon: BsBookmarkStar,
      text: 'Favoritos',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 1,
      icon: BsPersonCheckFill,
      text: 'Dados pessoais',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 2,
      icon: BsShieldCheck,
      text: 'Alterar senha',
      divider: true,
      onClick: () => navigate('/favorites')
    },
    {
      id: 3,
      icon: HiOutlineDocumentText,
      text: 'Termos de uso',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 4,
      icon: BiClipboard,
      text: 'Politica de privacidade',
      divider: true,
      onClick: () => navigate('/favorites')
    },
    {
      id: 5,
      icon: BiLogOut,
      text: 'Logout',
      divider: false,
      onClick: () => navigate('/favorites')
    }
  ]

    
    return(
        <Menu>
            <MenuButton>
                <Flex alignItems='center' justifyContent='center' flexDir='row'>
                    <Avatar
                      w={['36px', '48px']}
                      h={['36px', '48px']}
                      name={userStore?.user?.name}
                      src={userStore?.user?.avatar_url}
                      borderColor='brand.primary'
                      borderWidth='2px'
                      bg='brand.grayDark'
                      mr={['6px','12px']}
                    />
                    <Flex display={['none', 'flex']}>
                      <Text maxLenght='40px' fontWeight='bold'>
                        {userStore?.user?.name}
                      </Text>
                    </Flex>
                    
                    <ChevronDownIcon boxSize='24px' />
                </Flex>
            </MenuButton>
            <MenuList>
              {menuOptions.map((item) => (
                <MenuItem
                  onClick={()=>item.onClick()}
                  key={`menu_item_${item.id}`} {...item} />
              ))}
            </MenuList>
        </Menu>
    )
}
