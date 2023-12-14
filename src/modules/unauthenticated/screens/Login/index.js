import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button} from 'components'

export const LoginScreen = () => {
    return(
        <Flex w='100vw' h='100vh' flexDir='row'>
            <Flex
              padding={['24px', '48px','80px', '96px', '112px']}
              alignItems={['center', 'center', 'center', 'center','flex-start']}
              justifyContent='center'
              flexDir='column'
              w={['100%','100%','100%','100%','40%']}
              h='100%'
            >
                
                <Image
                  w='160px'
                  h='48px'
                  src='/imgs/logo.svg'
                  alt='logo'
                />
                <Flex 
                  w={['100%','100%', '100%','100%', '416px']}
                  flexDir='column'
                >
                  <Text.ScreenTitle marginTop='48px'>Login</Text.ScreenTitle>
                  <Input mt='24px' placeholder="email@email.com"/>
                  <Input.Password mt='16px' placeholder="********"/>
                  <Flex mt='24px' w='100%' alignItems='flex-end' justifyContent='flex-end'>
                    <Link> Forgot password</Link>
                  </Flex>
                  <Button mt='24px' >Login</Button>
                  <Link.Action
                    mt='48px'
                    text='No have account? '
                    actionText='Register here'
                  />
                </Flex>
            </Flex>
            <Flex
              w={['0%', '0%', '0%', '0%','60%']}
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