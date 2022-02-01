import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import ImageModal from './components/ImageModal'

// Web format url depending on client sizes

// shadowing when mouse on img and

const getFromPixabay = async (search) => {
  try {
    const response = await axios(
      `https://pixabay.com/api/?key=25509242-01b42e750ab44d9c177d95999&q=${search}&image_type=photo`,
    )
    return response.data.hits
  } catch (error) {
    console.error(error)
  }
}

function App() {
  const [searchText, setSearchText] = useState('')
  const [images, setImages] = useState([])

  useEffect(async () => {
    const arrayOfImages = await getFromPixabay(searchText)

    console.log(arrayOfImages)
    setImages(arrayOfImages)
  }, [searchText])

  return (
    <div className="App">
      <input
        style={{ color: images.length === 0 ? 'red' : 'black' }}
        type="text"
        placeholder="Search..."
        onChange={() => {
          setSearchText(event.target.value)
        }}
        className="pl-3 border-solid border-4 border-black rounded-md m-10 w-[80vw] text-xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-5">
        {images.map((value, key) => (
          <ImageModal key={key} data={value} />
        ))}
      </div>
    </div>
  )
}

export default App
