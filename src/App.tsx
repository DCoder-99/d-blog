import { ChakraProvider } from '@chakra-ui/react';
import Root from './routes/root';

function App() {
    return <ChakraProvider toastOptions={{ defaultOptions: { position: 'top-right'}}}>
        <Root />
    </ChakraProvider>
}

export default App;
