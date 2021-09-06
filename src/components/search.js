import { Button } from '../components/button'
import { BiSearchAlt } from 'react-icons/bi'

export const Search = () => {
  return (
    <>
      <form>
        <input type='text' placeholder='Search' />
        <Button>Search</Button>
        <BiSearchAlt />
      </form>
    </>
  )
}
