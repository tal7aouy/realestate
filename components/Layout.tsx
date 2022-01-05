import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxW='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  )
}

export default Layout
