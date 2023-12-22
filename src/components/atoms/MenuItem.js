import { Text } from 'components/atoms'
import { MenuItem as ChakraMenuItem, Icon} from '@chakra-ui/react'

export const MenuItem = ({ icon, text, divider }) => (
    <ChakraMenuItem h='48px' borderBottomWidth={divider? '2px' : '0px'} borderBottomStyle='solid' borderBottomColor='brand.grayLight'>
        <Icon color='brand.grayDark' mr='10px' as={icon} boxSize='18px' />
        <Text color='brand.grayDark' fontWeight='600' fontSize='14px'>
            {text}
        </Text>
    </ChakraMenuItem>
)
