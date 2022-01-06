import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters'
import Property from '../components/Property'
import noresult from '../assets/images/noresult.svg'
import { baseUrl, fetchData } from '../utils/api'
interface IQuery {
  query: string
}
function Search({ properties }) {
  const [search, setSearch] = useState<Boolean>(false)
  const router = useRouter()
  return (
    <Box>
      <Flex
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
        onClick={() => setSearch((prevSearch: Boolean) => !prevSearch)}
      >
        <Text>Search Property By Filters.</Text>
        <Icon pl='2' w='7' as={BsFilter}></Icon>
      </Flex>
      {search && <SearchFilters />}
      <Text fontSize='2xl' fontWeight='bold' p='4'>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap'>
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDir='column'
          my='5'
        >
          <Image alt='no result' src={noresult} />
          <Text fontSize='2xl' mt='3'>
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default Search

export const getServerSideProps = async ({ query }: IQuery) => {
  const purpose: string = query?.purpose || 'for-sale'
  const rentFrequency: string = query.rentFrequency || 'yearly'
  const minPrice: string = query.minPrice || '0'
  const maxPrice: string = query.maxPrice || '1000000'
  const roomsMin: string = query.roomsMin || '0'
  const bathsMin: string = query.bathsMin || '0'
  const sort: string = query.sort || 'price-desc'
  const areaMax: string = query.areaMax || '35000'
  const locationExternalIDs: string = query.locationExternalIDs || '5002'
  const categoryExternalID: string = query.categoryExternalID || '4'

  const data = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  )
  return {
    props: {
      properties: data?.hits,
    },
  }
}
