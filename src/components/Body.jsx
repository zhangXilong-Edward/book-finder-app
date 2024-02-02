import React, { useState } from 'react'
import '../index.css'

function formatPara(e) {
    const sentenceArray = e.match(/([^.?!;\u2026]+[.?!;\u2026]+)/g)
    const resultArray = sentenceArray.map((e) => {
        return `<p>${e}</p><br/>`
    })
    const result = resultArray.join('')
    return result
}


export default function Body({ results, searchParam, numOfResults, setNumOfResults }) {
    console.log(numOfResults)

    function handleShowMoreResults() {
        setNumOfResults(prev => prev * 2)
    }

    const [expand, setExpand] = useState([]);

    function handleExpand(e) {
        let expandedId = e.target.parentNode.getAttribute('expandedid')
        setExpand(prev => [...prev, Number(expandedId)])
        console.log(expand)
    }

    function handleClose(e) {
        let expandedId = e.target.parentNode.getAttribute('expandedid')
        setExpand(prev => prev.filter((e) => e !== Number(expandedId)))
    }

    return (
        <div className='body'>
            <div className='book-grid'>
                {searchParam ? results ? results.map((result, index) => {
                    return (
                        <div key={index} className='book' expandedid={index}>
                            <a href={result.volumeInfo.previewLink}> <b > {result.volumeInfo.title}</b></a>
                            <div className='thumbnail-wrapper'>
                                {result.volumeInfo.imageLinks && <a href={result.volumeInfo.previewLink}><img src={result.volumeInfo.imageLinks.thumbnail}></img></a>}
                                <div className='book-details'>
                                    {result.volumeInfo.authors && result.volumeInfo.authors.length > 1 ? (<p>Authors: {result.volumeInfo.authors.map((e, index) => {
                                        return index === result.volumeInfo.authors.length - 1 ? <span key={index}>{e} </span> : <span key={index}>{e}& </span>
                                    })}</p>) : result.volumeInfo.authors && (<p>Author: {result.volumeInfo.authors.map((e, index) => {
                                        return <span key={index}>{e}</span>
                                    })}</p>)}
                                    {result.volumeInfo.publisher && <p> Publisher: <span>{result.volumeInfo.publisher}</span> </p>}
                                    {result.volumeInfo.publishedDate && <p> Published Date: <span>{result.volumeInfo.publishedDate}</span></p>}
                                </div>
                            </div>
                            {expand && expand.includes(index) ? <span onClick={(e) => handleClose(e)} className='show-more'>Hide Description</span> : <span onClick={(e) => handleExpand(e)} className='show-more'>Show Description</span>}
                            {expand.includes(index) ? result.volumeInfo.description ? (<>
                                <div className='description'>
                                    <div dangerouslySetInnerHTML={{ __html: formatPara(result.volumeInfo.description) }} />
                                </div>
                            </>) : <p className='description'>No description found</p> : <></>}

                        </div>)
                }) : <div className='book'><i>Loading...</i></div> : (<div className='book'><i>Enter some keywords to starting Searching...</i></div>)}
                {searchParam && numOfResults == 10 || numOfResults == 20 ? <div className='show-more-results'><span onClick={handleShowMoreResults}>Show more results</span></div> : <span></span>}
            </div>
        </div>
    )
}
