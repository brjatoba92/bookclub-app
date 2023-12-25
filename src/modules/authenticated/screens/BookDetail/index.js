import { Flex } from "@chakra-ui/react"
import { NavBar } from "components"
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
              w='100%'
              h={['72px', '200px']}
              paddingX={['24px', '48px', '80px', '112px']}
              mt={['24px','48px']}
            >
              <Flex
                w='100%'
                h='100%'
                backgroundImage="url('/imgs/banner.svg')"
                backgroundSize='cover'
                backgroundPosition={['start','center']}
                backgroundRepeat='no-repeat'
                borderRadius={['8px','24px']}
              />
            </Flex>
            
        </Flex>
    )
}
