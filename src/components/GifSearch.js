import React, {useState} from 'react'

function GifSearch({handleSearch}) {
    const[searchInput, setSearchInput] = useState("")
  return (
    <div className="mb-3">
        <form onSubmit={(e)=>{
    e.preventDefault()
    handleSearch(searchInput)
}} >
            <div className="form-group">
            <label>Enter a Search Term: </label>
            <input className="form-control" type="search" value={searchInput} placeholder='search gifs' onChange={(e)=>{setSearchInput(e.target.value)}} />
            <button className="btn btn-success">Find GIFS</button>
            </div>
        </form>
    </div>
  )
}

export default GifSearch




