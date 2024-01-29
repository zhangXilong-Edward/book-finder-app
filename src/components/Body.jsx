import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Body({ results, searchParam }) {

    return (
        <div className='results-body'>
            {results && searchParam ? results.map((result, index) => {
                return (<Link to={`${result.id}`} key={index} className='result'>
                    <h4> {result.volumeInfo.title}</h4>
                    {result.volumeInfo.imageLinks && <img src={result.volumeInfo.imageLinks.thumbnail}></img>}

                    {result.volumeInfo.authors && result.volumeInfo.authors.length > 1 ? (<p>Authors: {result.volumeInfo.authors.map((e, index) => {
                        return index === result.volumeInfo.authors.length - 1 ? <span key={index}>{e} </span> : <span key={index}>{e}& </span>
                    })}</p>) : result.volumeInfo.authors && (<p>Author: {result.volumeInfo.authors.map((e, index) => {
                        return <span key={index}>{e}</span>
                    })}</p>)}
                    {result.volumeInfo.publisher && <p> Published by: <span>{result.volumeInfo.publisher}</span> </p>}
                    {result.volumeInfo.publishedDate && <p> Published Date: <span>{result.volumeInfo.publishedDate}</span></p>}
                </Link>)
            }) : (<>Starting Searching...</>)}
        </div>
    )
}
