import { Box, Link } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
      textAlign='center'
      p='5'
      color='gray.600'
      borderTop='1px'
      borderColor='gray.100'
    >
      Copyright &copy; {new Date().getFullYear()} ,{' '}
      <Link
        href='https://github.com/tal7aouy/realestate'
        color='blue.500'
        fontWeight='semibold'
      >
        RealEstate
      </Link>{' '}
    </Box>
  )
}

export default Footer
