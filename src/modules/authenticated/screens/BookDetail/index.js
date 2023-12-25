import { Flex } from "@chakra-ui/react"
import { Button, NavBar, Text } from "components"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getBookDetail } from "services/api/requests"


export const BookDetailScreen = () => {
    const { id } = useParams()
    const { data } = useQuery(
      ['bookDetail', id], 
      () => getBookDetail(id),
      {
        enabled: !!id
      })
      console.log({ data })
    
    return (
        <Flex flexDir='column'>
            <NavBar />
            <Flex
              flexDir='row'
              w='100%'
              paddingX={['24px', '48px', '80px', '112px']}
              mt={['24px','48px']}
            >
              <Flex
                w={['238px']}
                h={['358px']}
                backgroundImage={`url(${data?.data?.book?.cover_url})`}
                backgroundSize='cover'
                backgroundPosition={['center']}
                backgroundRepeat='no-repeat'
                borderRadius={['12px']}
              />
              <Flex flexDir='column' mx='48px' w='70%'>
                <Text.ScreenTitle fontSize='24px'>{data?.data?.book?.name}</Text.ScreenTitle>
                <Text fontSize='16px' color='brand.grayDark' mt='6px'> {data?.data?.book?.author?.name} </Text>
                <Text.ScreenTitle mt='24px'>Informações</Text.ScreenTitle>
                <Flex mt='6px' flexDir='row' justifyContent='space-between' fontSize='14px' color='brand.darkGray' w='100%'>
                    <Text>Categoria: {data?.data?.book?.category?.name}</Text>
                    <Text>Numero de paginas: {data?.data?.book?.pages}</Text>
                    <Text>Ano de Lançamento: {new Date(data?.data?.book?.pages).getFullYear() }</Text>
                </Flex>
                <Text.ScreenTitle mt='24px'>Sinopse</Text.ScreenTitle>
                <Text mt='6px' fontSize='12px'>{data?.data?.book?.synopsis}</Text>
              </Flex>
              <Flex>
                <Button>Adicionar aos favoritos</Button>
              </Flex>
            </Flex>
        </Flex>
    )
}
