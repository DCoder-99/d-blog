import { ChakraProvider } from '@chakra-ui/react';
import Root from './routes/root';

function App() {
    return <ChakraProvider>
        <Root />
    </ChakraProvider>
}

export default App;
