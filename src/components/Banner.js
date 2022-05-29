import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {Box, styled, Typography} from '@mui/material'
import { Data } from './data';


import React from 'react'

const Image = styled('img') ({
  width: '100%',
  height: '580px',
})

const Container = styled(Box)`
  padding: 10px 280px;
  background: #b2bec3;
  

`
const Text = styled(Typography)`
    text-align: center;
    color: #d63031;
    font-size: 30px;
    font-weight: 600;

`


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  return (
    <Container>
        <Text>Carousel Image Slide Show</Text>
        <Carousel
            responsive = {responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed = {2000}
            keyBoardControl={true}
            slidesToSlide = {1}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
        >
            {
                Data.map(data => (
                    <Image src={data.url} alt="banner" />
                ))
            }
        </Carousel>
      </Container>

  )
}

export default Banner