import { useState } from 'react'
import { setInputChange } from '../util/util'
import { Button } from '../components/button'
import { BiSearchAlt } from 'react-icons/bi'
import { Form, Input, Icon } from '../styles/components'
export const Search = ({ handleSubmit }) => {
  const [inputvalue, setInputValue] = useState('')

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e, inputvalue)}>
        <Input
          type='text'
          placeholder='Search'
          value={inputvalue}
          onChange={(e) => { setInputChange(e, setInputValue) }}
        />
        <Icon>
          <BiSearchAlt />
        </Icon>
        <Button>Search</Button>

      </Form>
    </>
  )
}
