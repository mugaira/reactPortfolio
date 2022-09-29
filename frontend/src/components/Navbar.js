import {
	Flex,
	Box,
	Icon,
	Button,
	Stack,
	useColorMode,
	Link,
	Heading
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Flex
				shadow='md'
				position='fixed'
				zIndex='sticky'
				w='full'
				borderBottom='2px'
				borderColor='black'
				as='header'
				justifyContent='space-between'
				alignItems='center'
				p='4'
				direction={{ lg: 'row', md: 'column', base: 'column' }}
				backdropFilter='saturate(180%) blur(10px)'
			>


				<Flex alignItems="center">
					<Link as={RouterLink} to='/' _hover={{ textDecor: 'none' }}>
						<Heading
							ml={{ lg: "226px", md: "200px", base: "0" }}
							as="h2"
							fontSize="3xl"
							textShadow="1px 1px Black"
						>
							Mugaira Inamdar
						</Heading>
					</Link>
				</Flex>

				<Flex mt="3" alignItems="center" gap="6" justifyContent="space-evenly">
					<Link as={RouterLink} to="/about" fontSize="xl" fontWeight="bold">
						About
					</Link>
					<Link as={RouterLink} to="/projects" fontSize="xl" fontWeight="bold">
						Projects
					</Link>
					<Link as={RouterLink} to="/resume" fontSize="xl" fontWeight="bold">
						Resume
					</Link>
				</Flex>

				<Box
					mr={{ lg: "163px", md: "140px", base: "0" }}
					display={{ lg: "block", md: "none", base: "none" }}
				>
					<Flex
						alignItems="center"
						gap="1"
						justifyContent="space-evenly"
						direction="row"
					>
						<Link href="https://github.com/mugaira">
							<Icon as={BsGithub} w="4" h="4" mx="2" />
						</Link>
						<Link href="https://www.linkedin.com/in/mugaira-inamdar">
							<Icon as={BsLinkedin} w="4" h="4" mx="2" />
						</Link>
					</Flex>
				</Box>

				<Flex alignItems='center'>
					<Stack
						direction='row'
						spacing={7}
					>
						<Button onClick={toggleColorMode}>
							{colorMode === 'dark' ?  <SunIcon /> : <MoonIcon />}
						</Button>
					</Stack>
				</Flex>

			</Flex>
		</>
	);
};

export default Navbar;
