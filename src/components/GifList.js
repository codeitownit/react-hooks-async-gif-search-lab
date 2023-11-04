import React from 'react'

function GifList({data}) {
    // console.log(data)
  return (
    <div>
        <ul>
            {data.map((gif)=>(
                <li key={gif.url}>
                    <img src={gif.url} alt="gif" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GifList



