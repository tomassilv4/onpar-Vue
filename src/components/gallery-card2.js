import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card2.css'

const GalleryCard2 = (props) => {
  return (
    <div className={`gallery-card2-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card2-image"
      />
    </div>
  )
}

GalleryCard2.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/main%20foto%20assorted-1500h.jpg',
  image_alt: 'image',
}

GalleryCard2.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard2
