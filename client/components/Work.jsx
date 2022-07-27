import React from 'react'
import MediaCard from './ImageCardHome';
import workData from '../staticData/workData';
import Carousel from 'react-elastic-carousel';


function Work() {
  // const breakpoints = [
  //   {width: 500, itemsToShow: 1},
  //   {width: 800, itemsToShow: 2},
  //   {width: 1400, itemsToShow: 3},
  // ]

  return(
    <div className='work-container'>
      <div className='work-heading'>
        <h1>Previous Web Development Projects</h1>
      </div>
      <div className='work-content'>
        <Carousel >
          <MediaCard workData={workData[0]} />
          <MediaCard workData={workData[1]} />
        </Carousel>
      </div>
     
    </div>
  
  )
}

export default Work