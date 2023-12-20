import { Flex } from "@chakra-ui/react";
import { SearchBar } from 'components/molecules';

export const NavBar = () => {
    return (
        <Flex
          w='100vw'
          flexDir='row'
          alignItems='baseline'
          justifyContent='space-between'
        >
            <SearchBar></SearchBar>
        </Flex>
    )
}
