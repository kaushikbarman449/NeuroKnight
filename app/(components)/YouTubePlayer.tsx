'use client'

import YouTube from 'react-youtube'

const YoutubePlayer = () => {
  return (
    <div className=''>
      <YouTube
        videoId='7DoplaBPnG0'
        className='w-[450px] lg:w-[800px] md:w-[500px] aspect-video overflow-hidden rounded-xl' // defaults -> ''
        iframeClassName='inset-0 w-full h-full'
        opts={{ autoplay: 0, controls: 0 }}
      />
    </div>
  )
}

export default YoutubePlayer
