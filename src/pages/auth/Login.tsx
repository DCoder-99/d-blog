import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Text,
} from '@chakra-ui/react';
import { BiLock } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { redirect, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from './auth';
import { useState } from 'react';
import { Formik } from 'formik';

interface User {
    username: string;
    password: string;
}

interface UserError {
    username: boolean;
    password: boolean;
}

export async function loader() {
    if (fakeAuthProvider.isAuthenticated) {
        return redirect('/');
    }
    return null;
}

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User>({
        username: '',
        password: '',
    });

    const [userError, setUserError] = useState<UserError>({
        username: false,
        password: false,
    });

    const handleLogin = async () => {
        console.log('user: ', user);
        setUserError({
            username: !!user.username,
            password: !!user.password,
        });
        // await fakeAuthProvider.signin(user.username)
        // navigate("/")
    };

    return (
        <Box
            w="100%"
            h="100vh"
            bgGradient="linear(to-r, green.200, pink.500)"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                shadow={'base'}
                height={'90%'}
                bg="white"
                width={{ base: '50%', xl: '33%' }}
                className="rounded-lg"
                padding="1.5em 2em"
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'space-between'}
            >
                <Heading>Login</Heading>
                <Box width={'full'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Formik>
                        <FormControl width={'full'} mb={5} isInvalid={!user.username}>
                            <FormLabel>Username</FormLabel>
                            <InputGroup tabIndex={-1}>
                                <InputLeftElement>
                                    <Icon as={FaRegUser} />
                                </InputLeftElement>
                                <Input
                                    tabIndex={0}
                                    type="text"
                                    variant={'flushed'}
                                    placeholder="Type your username"
                                    value={user.username}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                />
                            </InputGroup>
                            {!userError.username && <FormErrorMessage>Username is required.</FormErrorMessage>}
                        </FormControl>
                        <FormControl width={'full'} mb={5} isInvalid={!userError.password}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup tabIndex={-1}>
                                <InputLeftElement>
                                    <Icon as={BiLock} />
                                </InputLeftElement>
                                <Input
                                    tabIndex={0}
                                    type="password"
                                    variant={'flushed'}
                                    placeholder="Type your password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </InputGroup>
                            {!userError.password && <FormErrorMessage>Password is required.</FormErrorMessage>}
                        </FormControl>
                        <Link href="/forgot-password" width={'full'} textAlign={'right'}>
                            Forgot password?
                        </Link>
                        <Button textTransform={'uppercase'} rounded={'3xl'} width={'80%'} mt={6} onClick={handleLogin}>
                            login
                        </Button>
                    </Formik>
                    <Text my={2}>Or Sign Up Using</Text>
                    <Box>
                        <Link href="/auth-face-book" title="Login with Faceboox">
                            <Icon mx={2} as={BsFacebook} />
                        </Link>
                        <Link href="/auth-twitter" title="Login with Twitter">
                            <Icon mx={2} as={BsTwitter} />
                        </Link>
                        <Link href="/auth-instagram" title="Login with Instagram">
                            <Icon mx={2} as={BsInstagram} />
                        </Link>
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Text>Or</Text>
                    <Link href="/sign-up" mt={2} textTransform={'uppercase'}>
                        sign up
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
