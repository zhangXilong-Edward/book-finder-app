import React, { useEffect, useState } from 'react'
import {
  useParams,
  Link
} from "react-router-dom";
import '../index.css'
import SearchBar from '../components/Searchbar';


export default function Book() {

  const { id } = useParams();
  const [book, setBook] = useState({})
  const [description, setDescription] = useState('')
  console.log(description)

  useEffect(() => {
    fetch(` https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data.volumeInfo)
        setDescription(data.volumeInfo.description)
      })
  }, [])

  return (
    <div className='container'>
      <div className='book-details'>
        {book.imageLinks && <img src={book.imageLinks.thumbnail}></img>}
        <div className='description'>
        <p>Description: </p>
        {<div dangerouslySetInnerHTML={{ __html: description }} />}
      </div>
      </div>
     
      <div className='book-footer'>
          {book.authors && book.authors.length > 1 ? (<p>Written by: {book.authors.map((e, index) => {
            return index === book.authors.length - 1 ? <span key={index}>{e} </span> : <span key={index}>{e}& </span>
          })}</p>) : book.authors ? (<p>Written by: {book.authors.map((e, index) => {
            return <span key={index}>{e}</span>
          })}</p>) : <span>No author info found</span>}
          {book.publisher && <p> Published by: <span>{book.publisher}</span> </p>}
          {book.publishedDate && <p> Published on: <span>{book.publishedDate}</span></p>}
        </div>
    </div>
  )
}
