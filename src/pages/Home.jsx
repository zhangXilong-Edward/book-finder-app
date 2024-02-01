import React, { useState, useEffect } from 'react'
import Body from '../components/Body'
import SearchBar from '../components/SearchBar'
import '../index.css'

export const apiKey = 'AIzaSyAt3kJBcohjZO2WqT8uMYkeD20kgiYdxFo'

export default function Home() {

    const [input, setInput] = useState('')
    const [searchParams, setSearchParams] = useState('')
    const [results, setResults] = useState(undefined)
    const [numOfResults, setNumOfResults] = useState(10)

    function handleSearchSubmit(e) {
        e.preventDefault()
        setSearchParams(input)
    }

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParams}&maxResults=${numOfResults}&startIndex=0&key=${apiKey}`)
            .then(response => response.json())
            .then(data => setResults(data.items))
    }, [searchParams, numOfResults])

    return (
        <div className='container'>
            <SearchBar
                input={input}
                setInput={setInput}
                handleSearch={handleSearchSubmit}
            />
            <Body
                results={results}
                searchParam={searchParams}
                numOfResults={numOfResults}
                setNumOfResults={setNumOfResults} />
        </div>
    )
}
