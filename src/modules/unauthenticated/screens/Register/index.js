import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button} from 'components'
import { useNavigate } from 'react-router-dom'

export const RegisterScreen = () => {
    const navigate = useNavigate()
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
                  <Text.ScreenTitle marginTop='48px'>Registre</Text.ScreenTitle>
                  <Input mt='24px' placeholder="Your Name"/>
                  <Input mt='16px' placeholder="E-mail"/>
                  <Input.Password mt='16px' placeholder="Password"/>
                  <Input.Password mt='16px' placeholder="Confirm Password"/>
                  <Button mt='24px' mb='12px' >Register</Button>
                  <Link.Action
                    onClick = {() => navigate('/')}
                    mt='8px'
                    text='You have account? '
                    actionText='Make login here'
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