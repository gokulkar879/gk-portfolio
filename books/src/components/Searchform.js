import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';


function Searchform() {
    const [query, setQuery] = useState('')
    const handleSubmit = e => {

        
    }
  return (
    <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search by author or title...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='form-input'
          />
          <button type='submit' className='submit_btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
  )
}

export default Searchform