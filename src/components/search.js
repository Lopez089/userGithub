import { useState } from 'react'
import { setInputChange } from '../util/util'
import { Button } from '../components/button'
import { BiSearchAlt } from 'react-icons/bi'

export const Search = () => {
  const [inputvalue, setInputValue] = useState('')

  return (
    <>
      <form>
        <input
          type='text'
          placeholder='Search'
          value={inputvalue}
          onChange={(e) => { setInputChange(e, setInputValue) }}
        />
        <Button>Search</Button>
        <BiSearchAlt />
      </form>
    </>
  )
}
