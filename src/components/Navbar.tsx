import {
    Avatar,
    Box,
    Icon,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Link as LinkUI,
    Tab,
    TabList,
    Tabs,
    Tooltip
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsBell, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Box display={'flex'} flexDirection={'row'} shadow={'base'} px={'5'} py={3} alignItems={'center'}>
            <Box display={'flex'} flex={1}>
                <LinkUI href="/">
                    <Image boxSize={10} minWidth={10} src={logo} alt="D-Blog" borderRadius="full" />
                </LinkUI>
                <InputGroup ml={4} width={'40%'}>
                    <InputLeftElement>
                        <Icon as={BsSearch} />
                    </InputLeftElement>
                    <Input
                        rounded={'3xl'}
                        type="text"
                        placeholder="Tìm kiếm trên trang"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </InputGroup>
            </Box>
            <Box flex={1}>
                <Tabs width={'fit-content'}>
                    <TabList>
                        <Tab>
                            <Link to="/">Home</Link>
                        </Tab>
                        <Tab>
                            <Link to="/trending">Trending</Link>
                        </Tab>
                        <Tab>
                            <Link to="/upcoming">Upcoming</Link>
                        </Tab>
                        <Tab>
                            <Link to="/popular">Popular</Link>
                        </Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Box flex={1} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                <Tooltip label="Notifications" openDelay={250}>
                    <Icon mr={5} as={BsBell} cursor={'pointer'} />
                </Tooltip>
                <Tooltip label="Profile" openDelay={250}>
                    <Avatar cursor={'pointer'} size={'sm'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                </Tooltip>
            </Box>
        </Box>
    );
};

export default Navbar;
