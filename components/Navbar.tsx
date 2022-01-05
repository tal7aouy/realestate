import Link from 'next/link'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
function Navbar() {
  return (
    <Flex
      p='2'
      borderBottom='1px'
      shadow='md'
      rounded='md'
      borderColor='gray.100'
    >
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant='outlined'
            color='red.400'
          />
          <MenuList>
            <Link href='/' passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href='/search' passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href='/search?purpose=for-sale' passHref>
              <MenuItem icon={<FcAbout />}>Sale Property</MenuItem>
            </Link>
            <Link href='/search?purpose=for-rent' passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link href='/' pl='2'>
          RealState
        </Link>
      </Box>
    </Flex>
  )
}

export default Navbar
