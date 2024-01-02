import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button} from 'components'
import { useFormik } from 'formik'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { resetPasswordCall } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams
  
  const toast = useToast()
    const mutation = useMutation((data) => resetPasswordCall(data), {
      onError: (error) => {
        toast({
          title: 'Falha na requisição.',
          description: error?.response?.data?.error || 'Por favor, tente novamente',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })

      },
      onSuccess: () => {
        toast({
          title: 'Senha salva com sucesso',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
        navigate('/')
      }
    })

  const { handleSubmit, values, handleChange, errors} = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      token: Yup.string().length(6, 'O Token deve conter 6 caracteres').required('Token é obrigatório'),
      password: Yup.string().min(6, 'Senha deve ter ao menos 6 caracteres').required('Senha é obrigatorio.'),
      confirmPassword: Yup.string()
        .min(6, 'Conformar a senha deve ter ao menos 6 caracteres')
        .required('Conformar a senha é obrigatorio.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: searchParams.get('email'),
        token: data.token,
        password: data.password
      })
    }
  })

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
                  <Text.ScreenTitle marginTop='48px'>New Password</Text.ScreenTitle>
                  <Text mt='24px'>Digite o código enviado e uma nova senha  nos campos abaixo:</Text>
                  <Input
                    id='token'
                    name='token'
                    value={values.token}
                    mt='24px'
                    placeholder="Ex: 000000"
                    onChange = {handleChange}
                    error={errors.token}
                    macLenght={6}
                  />
                  <Input.Password
                    id='password'
                    name='password'
                    value={values.password}
                    mt='24px'
                    placeholder="New Password"
                    onChange = {handleChange}
                    error={errors.password}
                  />
                  <Input.Password
                    id='confirmPassword'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    mt='24px'
                    placeholder="Confirm New Password"
                    onChange = {handleChange}
                    error={errors.confirmPassword}
                  />
                  <Button
                    isLoading={mutation.isLoading}
                    onClick={handleSubmit}
                    mt='24px'
                    mb='12px'
                  >
                    Save
                  </Button>
                  <Link.Action
                    mt='8px'
                    text='No have token? '
                    actionText='Click to resend'
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