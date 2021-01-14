import React from 'react'
import Iframe from 'react-iframe'
import styles from './Bio.css';
export default function Bio() {
  return (
    <div className={styles.home}>
   <Iframe url="https://bandcamp.com/EmbeddedPlayer/album=2964969569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
   width="350px"
   height="470"
   id="myId"
   
   display="initial"
   />
   <Iframe url="https://www.youtube.com/embed/xQi3GUlW3K4"
    width="350px"
    height="470" 
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    allowFullScreen />
        

</div>
  )
}

