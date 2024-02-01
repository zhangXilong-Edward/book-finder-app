import React from 'react'
import '../index.css'

export default function SearchBar({ handleSearch, input, setInput }) {

  return (
    <div className='search-bar'>
      <h1>Book Finder</h1>
      <form onSubmit={(e) => { handleSearch(e) }}>
        <input value={input} onInput={(e) => { setInput(e.target.value) }} placeholder='search for titles/authors/publishers...' />
        <button type='submit' ><i className="fa fa-search"></i> </button>
      </form>

    </div>
  )
}
