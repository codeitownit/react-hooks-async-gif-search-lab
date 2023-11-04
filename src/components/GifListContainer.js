import React, {useEffect, useState} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
  const[gifData, setGifData]=useState([])
  const[search, setSearch]=useState("dolphins")

    useEffect(()=>{
      const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=UYgEyqrGdTZBv2tFNbvN2EGIUqWXXNpV&rating=g&limit=3`
      fetch(url)
      .then(response=>response.json())
      .then(data=>{
        const gifs = data.data.map((gif) => ({url:gif.images.original.url}));  
        setGifData(gifs)    
        }) 
      .catch(error=>console.log(error))
    },[search])
console.log(gifData)
    // function handleSearch(search){
    //   if(search.length > 0){
    //     const searchUrl = "https://api.giphy.com/v1/gifs/search?api_key=UYgEyqrGdTZBv2tFNbvN2EGIUqWXXNpV&rating=g&limit=3&q="+search
    //   fetch(searchUrl)
    //   .then(response => response.json())
    //   .then(data => {
    //     setGifData(data);
    //     // const results = data.filter((item)=>{
    //     //   return (search&& item&& item.title.toLowerCase().includes(search))
    //     // })
    //     // console.log(results)
    //   })

    //   }
      
    // }

// console.log(gifData.data)
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <GifList data={gifData}/>
      <GifSearch handleSearch ={setSearch}/>

      
    </div>
  )
}

export default GifListContainer



// import React,{ useState,useEffect} from 'react'
// import GifList from './GifList'
// import GifSearch from './GifSearch'
// const GifListContainer = () => {

//     const[gif, setGif] = useState([])
//     const [search, setSearch] = useState("dolphins");
    
//     const apiKey='1iwYJT1yONNHCIeXGdp7ZHi5KcGBZKYx';

//     useEffect(()=>{
//         fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
//         .then((res)=>res.json())
//         .then(({data})=>{
//             const gifs = data.slice(0,3).map((gif) => ({ url: gif.images.original.url }));
//             setGif(gifs);
            
//         })
    
//     },[search])


//   return (
//     <div style={{display:'flex',justifyContent:'space-around'}}>
//      <GifList  gifs={gif} />
//       <GifSearch onSubmitQuery={setSearch} />
//     </div>
//   )
// }

// export default GifListContainer