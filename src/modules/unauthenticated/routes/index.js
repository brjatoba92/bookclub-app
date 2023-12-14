import { LoginScreen, RegisterScreen, ForgotPasswordScreen  } from '../screens'

export const unauthRoutes = [
    {
        path: '/',
        element: <LoginScreen />
    },
    {
        path: '/signup',
        element: <RegisterScreen />
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordScreen />
    }

]
