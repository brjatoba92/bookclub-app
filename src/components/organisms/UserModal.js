import { useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Avatar,
    useToast,
    Icon
  } from '@chakra-ui/react'
  import { Text, Button } from 'components/atoms'
  import { Input } from 'components/molecules'
  import { useFormik } from 'formik'
  import * as Yup from 'yup'
  import { useDispatch, useSelector } from 'react-redux'
  import { useMutation } from 'react-query'
  import { updateUserCall, updateUserAvatar } from 'services/api/requests'
  import { setUser } from 'services/store/slices/user'
  import { RiEditLine } from "react-icons/ri";

  export const UserModal = ({ onClose }) => {
    const inputFileRef = useRef()
    const toast = useToast()
    const userStore = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const mutation = useMutation((data) => updateUserCall(data), {
      onError: (error) => {
        toast({
          title: 'Falha ao atualizar usuario.',
          description: error?.response?.data?.error || 'Por favor, tente novamente',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })

      },
      onSuccess: (data) => {
        console.log({data})
        toast({
          title: 'Usuario atualizado com sucesso',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
        dispatch(
          setUser({
            user: data?.data?.user
          })
        )
      }
    })


    const mutationAvatar = useMutation((data) => updateUserAvatar(data), {
      onError: (error) => {
        toast({
          title: 'Falha ao atualizar avatar do usuario.',
          description: error?.response?.data?.error || 'Por favor, tente novamente',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })

      },
      onSuccess: (data) => {
        toast({
          title: 'Avatar do usuario atualizado com sucesso',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
        dispatch(
          setUser({
            user: data?.data
          })
        )
      }
    })


    const { values, handleChange, errors, handleSubmit } = useFormik({
        initialValues: {
          name: userStore?.user?.name,
          email: userStore?.user?.email,
        },
        validationSchema: Yup.object({
          name: Yup.string().min(3, 'Nome deve ter ao menos 3 caracteres').required('Nome é obrigatório'),
          email: Yup.string().email('E-mail invalido').required('E-mail é obrigatorio.'),
        }),
        onSubmit: (data) => {
          mutation.mutate(data)
        }
      })
      const onChangeImage = (event) => {
        const file = event?.target?.files[0]
        const type = file?.type
        
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const base64 = reader.result
          mutationAvatar.mutate({
            mime: type, 
            base64
          })
        }
      }
    return(
      <Drawer
        size='sm'
        isOpen={true}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text.ScreenTitle>Dados pessoais</Text.ScreenTitle>
          </DrawerHeader>
          
            <DrawerBody>
              <input
                ref={inputFileRef}
                onChange={onChangeImage}
                style={{ display: 'none'}}
                type='file'
                accept='image/*'
              />
              <Flex alignItems='center' justifyContent='center' w='100%'>
                <Avatar
                  cursor='pointer'
                  w='100px'
                  h='100px'
                  name={userStore?.user?.name}
                  src={userStore?.user?.avatar_url}
                  borderColor='brand.primary'
                  borderWidth='4px'
                  bg='brand.grayDark'
                  onClick={() => inputFileRef?.current?.click()}
                 >

                </Avatar>
                <Flex
                  margin='-32px'
                  position='relative'
                  w='32px'
                  h='32px'
                  bg='brand.primary'
                  borderRadius='16px'
                  top='36px'
                  alignItems='center'
                  justifyContent='center'
                  onClick={() => inputFileRef?.current?.click()}
                >
                  <Icon color='brand.black' as={RiEditLine} boxSize='24px' />

                </Flex>
              </Flex>
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
              <Button
                onClick={handleSubmit}
                isLoading={ mutation.isLoading || mutationAvatar.isLoading}
                w='100%'
                mt={['64px']}
              >
                Adicionar
              </Button>
            </DrawerBody>
          
            </DrawerContent>
        </Drawer>
            
    )
  }
