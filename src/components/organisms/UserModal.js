import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Avatar,
  } from '@chakra-ui/react'
  import { Input } from 'components/molecules'
  import { useFormik } from 'formik'
  import * as Yup from 'yup'
  import { useSelector } from 'react-redux'
  import { Text, Button } from 'components/atoms'

  export const UserModal = ({ onClose }) => {
    const userStore = useSelector((state) => state.user)
    const { values, handleChange, errors} = useFormik({
        initialValues: {
          name: userStore?.user?.name,
          email: userStore?.user?.email,
        },
        validationSchema: Yup.object({
          name: Yup.string().min(3, 'Nome deve ter ao menos 3 caracteres').required('Nome é obrigatório'),
          email: Yup.string().email('E-mail invalido').required('E-mail é obrigatorio.'),
        }),
        onSubmit: (data) => {
        }
      })
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
              <Flex alignItems='center' justifyContent='center' w='100%'>
                <Avatar
                 w={['36px', '100px']}
                 h={['36px', '100px']}
                 name={userStore?.user?.name}
                 src={userStore?.user?.avatar_url}
                 borderColor='brand.primary'
                 borderWidth='4px'
                 bg='brand.grayDark'
                 >

                </Avatar>
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
              <Button w='100%' mt={['64px']}>Adicionar</Button>
            </DrawerBody>
          
            </DrawerContent>
        </Drawer>
            
    )
  }
