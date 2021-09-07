import { useState } from 'react'
import { setInputChange } from '../util/util'
import { ButtonStyle } from '../components/button'
import { BiSearchAlt } from 'react-icons/bi'

export const Search = ({ handleSubmit }) => {
  const [inputvalue, setInputValue] = useState('')

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, inputvalue)}>
        <input
          type='text'
          placeholder='Search'
          value={inputvalue}
          onChange={(e) => { setInputChange(e, setInputValue) }}
        />
        <ButtonStyle>Search</ButtonStyle>
        <BiSearchAlt />
      </form>
    </>
  )
}
