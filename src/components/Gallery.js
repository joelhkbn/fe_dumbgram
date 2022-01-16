import React from 'react'
import Masonry from 'react-masonry-css'
import '../components/Gallery.css'
import images from '../assets/data/dataImages'

function Gallery() {
  const importer = images
  const Columns = {
    default: 3,
    1000: 2,
    700: 1,
  }

  return (
    <div>
      <Masonry
        breakpointCols={Columns}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {importer.map((image, id) => (
          <div key={id}>
            <img src={image.url} alt='images' />
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default Gallery
