import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const CategoryCard = ({ id, name, selected }) => {
    return (
      <Flex
        h='38px'
        px='14px'
        py='12px'
        borderStyle='solid'
        borderWidth='1px'
        mr='16px'
        borderRadius='8px'
        borderColor={selected ? 'brand.black' : 'brand.grayLight'}
        bg={selected ? 'brand.black' : 'brand.backgrond'}
        alignItems='center'
        justifyContent='center'
      >
        <Text
          fontSize='14px'
          fontWeight='600'
          color={selected ? 'brand.white' : 'brand.black'}
        >
            {name}
        </Text>

    </Flex>)
}
