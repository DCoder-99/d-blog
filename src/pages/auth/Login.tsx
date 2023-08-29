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
    Tooltip,
    useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { BiLock } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { redirect, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from './auth';
import { validatePassword, validateUsername } from '../../utils/validate';

export async function loader() {
    if (fakeAuthProvider.isAuthenticated) {
        return redirect('/');
    }
    return null;
}

const Login = () => {
    const navigate = useNavigate();
    const toast = useToast();

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
                width={{ base: '50%', xl: '25%' }}
                minWidth={'350px'}
                className="rounded-lg"
                padding="1.5em 2em"
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'space-between'}
            >
                <Heading>Login</Heading>
                <Box width={'full'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={async (values, { setSubmitting }) => {
                            await fakeAuthProvider.signin(values.username);
                            toast({
                                title: 'Login success',
                                status: 'success',
                                duration: 2500,
                                isClosable: true,
                            });
                            setTimeout(() => {
                                setSubmitting(false);
                                navigate('/');
                            }, 500);
                        }}
                    >
                        {({
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <Form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                                <Field name="username" validate={validateUsername}>
                                    {({ field, form }: { field: any; form: any }) => (
                                        <FormControl
                                            width={'full'}
                                            mb={5}
                                            isInvalid={form.errors.username && form.touched.username}
                                        >
                                            <FormLabel>Username</FormLabel>
                                            <InputGroup tabIndex={-1}>
                                                <InputLeftElement>
                                                    <Icon as={FaRegUser} />
                                                </InputLeftElement>
                                                <Input
                                                    {...field}
                                                    tabIndex={0}
                                                    type="text"
                                                    variant={'flushed'}
                                                    placeholder="Type your username"
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="password" validate={validatePassword}>
                                    {({ field, form }: { field: any; form: any }) => (
                                        <FormControl
                                            width={'full'}
                                            mb={5}
                                            isInvalid={form.errors.password && form.touched.password}
                                        >
                                            <FormLabel>Password</FormLabel>
                                            <InputGroup tabIndex={-1}>
                                                <InputLeftElement>
                                                    <Icon as={BiLock} />
                                                </InputLeftElement>
                                                <Input
                                                    {...field}
                                                    tabIndex={0}
                                                    type="password"
                                                    variant={'flushed'}
                                                    placeholder="Type your password"
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Link href="/forgot-password" width={'full'} textAlign={'right'}>
                                    Forgot password?
                                </Link>
                                <Button
                                    textTransform={'uppercase'}
                                    rounded={'3xl'}
                                    width={'80%'}
                                    mt={6}
                                    type="submit"
                                    isLoading={isSubmitting}
                                >
                                    login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Text my={2}>Or Sign Up Using</Text>
                    <Box>
                        <Tooltip label="Login with Faceboox" openDelay={250}>
                            <Link href="/auth-face-book">
                                <Icon mx={2} as={BsFacebook} />
                            </Link>
                        </Tooltip>
                        <Tooltip label="Login with Twitter" openDelay={250}>
                            <Link href="/auth-twitter">
                                <Icon mx={2} as={BsTwitter} />
                            </Link>
                        </Tooltip>
                        <Tooltip label="Login with Instagram" openDelay={250}>
                            <Link href="/auth-instagram">
                                <Icon mx={2} as={BsInstagram} />
                            </Link>
                        </Tooltip>
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
