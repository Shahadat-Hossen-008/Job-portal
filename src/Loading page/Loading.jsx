import React from 'react'
import loading from '../assets/Lottie/loading.json'
function Loading () {
  return (
    <div> <Lottie animationData={loading} className='w-96'></Lottie></div>
  )
}

export default Loading