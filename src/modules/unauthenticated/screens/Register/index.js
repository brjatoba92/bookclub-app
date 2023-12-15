import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button} from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { registerCall } from 'services/api/requests'

export const RegisterScreen = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const mutation = useMutation((newUser) => registerCall(newUser), {
      onError: (error) => {
        // console.log({ error })
        toast({
          title: 'Falha ao criar a conta.',
          description: error?.response?.data?.error || 'Por favor, tente novamente',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })

      },
      onSuccess: () => {
        // console.log({ data })
        toast({
          title: 'Conta criada',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
        navigate('/')
      }
    })

    const { handleSubmit, values, handleChange, errors} = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      validationSchema: Yup.object({
        name: Yup.string().min(3, 'Nome deve ter ao menos 3 caracteres').required('Nome é obrigatório'),
        email: Yup.string().email('E-mail invalido').required('E-mail é obrigatorio.'),
        password: Yup.string().min(6, 'Senha deve ter ao menos 6 caracteres').required('Senha é obrigatorio.'),
        confirmPassword: Yup.string()
          .min(6, 'Conformar a senha deve ter ao menos 6 caracteres')
          .required('Conformar a senha é obrigatorio.')
          .oneOf([Yup.ref('password'), null], 'Senhas não são iguais')
      }),
      onSubmit: (data) => {
        // console.log({ data })
        mutation.mutate(data)
      }
    })
    // console.log({ values, errors })

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
                  <Input
                    type='text'
                    id='name'
                    name='name'
                    value={values.name}
                    mt='24px'
                    placeholder="Your Name"
                    onChange = {handleChange}
                    error={errors.name}
                  />
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={values.email}
                    mt='16px'
                    placeholder="E-mail"
                    onChange = {handleChange}
                    error={errors.email}
                  />
                  <Input.Password
                    id='password'
                    name='password'
                    value={values.password}
                    mt='16px'
                    placeholder="Password"
                    onChange = {handleChange}
                    error={errors.password}
                  />
                  <Input.Password
                    id='confirmPassword'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    mt='16px'
                    placeholder="Confirm Password"
                    onChange = {handleChange}
                    error={errors.confirmPassword}
                  />
                  <Button
                    isLoading={mutation.isLoading}
                    mt='24px' mb='12px'
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
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