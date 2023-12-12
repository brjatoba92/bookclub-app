import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Teste Fonte</h1>
    </ChakraProvider>
  );
}

export default App;
