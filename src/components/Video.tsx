// import React from 'react'
// import { VideoPlayer } from '@videojs-player/react'
// import 'video.js/dist/video-js.css'

// export const Video: React.FC = () => {
//   return (
//     <VideoPlayer
//       src="/videos/smart_football_game_demo.mp4"
//       loop
//       controls
//       autoplay
//     />
//   )
// }


import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
export const Video: React.FC = () => {
    return (
        <ReactPlayer 
            url="/videos/smart_football_game_demo.mp4"
            controls
         />
    )
}

