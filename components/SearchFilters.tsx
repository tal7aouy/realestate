import { useEffect, useState } from 'react'
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { filterData, getFilterValues } from '../utils/filter'

function SearchFilters() {
  const [filters, setFilters] = useState(filterData)
  const router = useRouter()
  const searchProperties = (filterValues: any) => {
    const path = router.pathname
    const { query } = router
    const values = getFilterValues(filterValues)
    values.forEach((element: any) => {
      query[element.name] = element.value
    })
    router.push({ pathname: path, query })
  }
  return (
    <Flex bg='gray.100' p='4' flexWra='wrap' justifyContent='center'>
      {filters.map((filter: any) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w='fit-content'
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((op: any) => (
              <option key={op} value={op.value}>
                {op.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters
