import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Button} from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { forgotPasswordCall } from 'services/api/requests'


export const ForgotPasswordScreen = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const mutation = useMutation((data) => forgotPasswordCall(data), {
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
          title: 'E-mail enviado com sucesso',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
        navigate(`/reset-password?email=${values.email}`)
      }
    })

    const { handleSubmit, values, handleChange, errors} = useFormik({
      initialValues: {
        email: ''
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('E-mail invalido')
          .required('E-mail é obrigatorio.')
      }),
      onSubmit: (data) => {
        mutation.mutate(data)
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
                  <Text.ScreenTitle marginTop='48px'>Forgot Password</Text.ScreenTitle>
                  <Text mt='24px'>Digite abaixo seu e-mail que enviaremos um código de recuperação de senha:</Text>
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
                  <Button
                    isLoading={mutation.isLoading}
                    onClick={handleSubmit}
                    mt='24px'
                  >
                    Send
                  </Button>
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