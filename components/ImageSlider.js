import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageSlider = ({ images, controls }) => (
  <Carousel controls={controls}>
    {images.map(image => (
      <Carousel.Item key={image}>
        <img src={image} alt="House images" />
      </Carousel.Item>
    ))}
  </Carousel>
)

export default ImageSlider
