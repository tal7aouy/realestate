import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import Property from '../components/Property'
// import api
import { baseUrl, fetchData } from '../utils/api'
interface IBanner {
  purpose: string
  imgUrl: string
  title1: string
  title2: string
  desc1: string
  desc2: string
  url: string
  btnText: string
}
const Banner = ({
  purpose,
  imgUrl,
  title1,
  title2,
  desc1,
  desc2,
  url,
  btnText,
}: IBanner) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imgUrl} alt='banner' width={500} height={300} />
    <Box p='5'>
      <Text fontSize='sm' color='gray.500' fontWeight='medium'>
        {purpose}
      </Text>
      <Text fontSize='3xl' fontWeight='bold'>
        {title1} <br /> {title2}
      </Text>
      <Text fontSize='lg' py='3' color='gray.700'>
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize='xl'>
        <Link href={url}>{btnText}</Link>
      </Button>
    </Box>
  </Flex>
)
const Home: NextPage = ({ propertiesForSale, propertiesForRent }) => {
  console.log(propertiesForSale, propertiesForRent)
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Homes, Villas'
        desc2='and more'
        btnText='Explore Renting'
        url='/search?purpose=for-rent'
        imgUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap'>
        {propertiesForRent.map((property: any) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        btnText='Explore Buying'
        url='/search?purpose=for-sale'
        imgUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap='wrap'>
        {propertiesForSale.map((property: any) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  )
}

export default Home

export const getStaticProps = async () => {
  const propertyForSale = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const propertyForRent = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  )

  // return properties
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}
