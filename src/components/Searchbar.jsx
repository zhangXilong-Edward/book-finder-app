import React from 'react'
import '../index.css'
import { Outlet } from 'react-router-dom'

export default function SearchBar({handleSearch, input, setInput}) {

  return (
      <div className='search-bar'>
        <h1>Search Component</h1>
        <form>
          <input value={input} onInput={(e) => { setInput(e.target.value) }} placeholder='search for titles/authors/publishers...' />
          <button type='button' onClick={() => { handleSearch() }}><i className="fa fa-search"></i> </button>
        </form>
      </div>
  )
}
