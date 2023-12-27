import { Flex, useToast } from "@chakra-ui/react"
import { Button, NavBar, Text, CategoryList } from "components"
import { useQuery, useMutation } from "react-query"
import { useParams } from "react-router-dom"
import { getBookDetail, addBookToFavorites } from "services/api/requests"


export const BookDetailScreen = () => {
    const toast = useToast()
    const { id } = useParams()
    const { data } = useQuery(
      ['bookDetail', id], 
      () => getBookDetail(id),
      {
        enabled: !!id
      })
      console.log({ data })
      const addFavoriteMutation = useMutation((data) => addBookToFavorites(data), {
      onError: (error) => {
        // console.log({ error })
        toast({
          title: 'Falha ao adicionar aos favoritos.',
          description: error?.response?.data?.error || 'Por favor, tente novamente',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })

      },
      onSuccess: () => {
        // console.log({ data })
        toast({
          title: 'Livro adicionado aos favoritos com sucesso',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
      }
    })

    const handleButtonClick = () => {
      addFavoriteMutation.mutate({
        book_id: id
      })
    }

    
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
                <Button onClick={() => handleButtonClick()}>Adicionar aos favoritos</Button>
              </Flex>
            </Flex>
            <CategoryList title='Outros livros' categoryId={data?.data?.book?.category?.id}/>
        </Flex>
    )
}
