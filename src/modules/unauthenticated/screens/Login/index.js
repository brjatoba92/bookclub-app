import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button} from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginScreen = () => {
  const navigate = useNavigate()

  // create formik => initialValues ... validationSchema ... onSubmit
  // handleSubmit no button

  const { handleSubmit, values, handleChange, errors} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail invalido').required('E-mail é obrigatorio.'),
      password: Yup.string().min(6, 'Senha deve ter ao menos 6 caracteres').required('Senha é obrigatorio.')
    }),
    onSubmit: (data) => {
      console.log({ data })
    }
  })
  console.log({ values, errors })

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
                  <Input
                    id='email'
                    name='email'
                    value={values.email}
                    mt='24px'
                    placeholder="email@exemplo.com"
                    onChange = {handleChange}
                  />
                  <Input.Password
                    id='password'
                    name='password'
                    value={values.password}
                    mt='16px'
                    placeholder="********"
                    onChange = {handleChange}
                  />
                  <Flex mt='24px' w='100%' alignItems='flex-end' justifyContent='flex-end'>
                    <Link onClick = {() => navigate('/forgot-password')}> Forgot password</Link>
                  </Flex>
                  <Button onClick={handleSubmit} mt='24px' mb='12px' >Login</Button>
                  <Link.Action
                    onClick = {() => navigate('/signup')}
                    mt='8px'
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