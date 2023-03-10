import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

const GalleryCard3 = (props) => {
  return (
    <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card3-image"
      />
      <div className="gallery-card3-container">
        <h1 className="gallery-card3-text">{props.title}</h1>
        <span className="gallery-card3-text1">{props.subtitle}</span>
      </div>
    </div>
  )
}

GalleryCard3.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
  rootClassName: '',
  image_alt: 'image',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  title: 'Project Title',
}

GalleryCard3.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard3
