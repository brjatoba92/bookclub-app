import { Flex, Image, Text, Input, Button, Link } from '@chakra-ui/react'

export const LoginScreen = () => {
    return(
        <Flex w='100vw' h='100vh' flexDir='row'>
            <Flex
              paddingLeft='112px'
              alignItems='flex-start'
              justifyContent='center'
              flexDir='column'
              w='40%'
              h='100%'
            >
                
                <Image
                  w='160px'
                  h='48px'
                  src='/imgs/logo.svg'
                  alt='logo'
                />
                <Flex w='416px' flexDir='column'>
                  <Text marginTop='48px' fontSize='20px' fontWeight='800'>Login</Text>
                  <Input marginTop='24px' placeholder="email@email.com"/>
                  <Input marginTop='16px' placeholder="********"/>
                  <Link marginTop='24px' fontSize='14px'> Forgot password</Link>
                <Button marginTop='24px' >Login</Button>
                <Link marginTop='48px' fontSize='16px'>No have an account? Register here</Link>
                </Flex>
                
            </Flex>
            <Flex
              w='60%'
              h='100vh'
              borderTopLeftRadius='32px'
              borderBottomLeftRadius='32px'
              backgroundImage="url('/imgs/auth_background.svg')"
              backgroundSize='cover'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
            />
        </Flex>
    )
}