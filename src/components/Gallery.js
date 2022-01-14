import React from 'react'
import Masonry from 'react-masonry-component'
import '../components/Gallery.css'

function Gallery() {
  const images = ['../assets/gallery/img(1).jpg']

  return (
    <div>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {images.map((image) => (
          <img src={image} alt='images' />
        ))}
      </Masonry>
    </div>
  )
}

export default Gallery
