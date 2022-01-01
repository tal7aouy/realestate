import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchData = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '787798ddfbmsh1bffd7edd6860b5p164518jsn2eac54d754a8',
    },
  })
  return data
}
