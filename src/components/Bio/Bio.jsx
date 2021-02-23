import React from 'react'
import Iframe from 'react-iframe'
import styles from './Bio.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css'


export default function Bio() {

  const bandSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles} className={styles.slider}>
      <div className={styles.cede}>
        <h3>Cede the Clouds</h3>
        <img src="public/assets/cede.jpg" />
        <Iframe url="https://bandcamp.com/EmbeddedPlayer/album=2964969569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2130197304/transparent=true/" 
        width="400px"
        height="120px"
        id="myId"
        
        display="initial"
        />
      </div>
      <div className={styles.pigs}>
        <h3>Feral Pigs</h3>
        <img src="public/assets/pigs.jpg"/>
        <Iframe url="https://www.reverbnation.com/widget_code/html_widget/artist_2390217?widget_id=55&pwc[song_ids]=17216491&context_type=song&spoid=artist_2390217"
        width="400px"
        height="120px"
        id="myId"
        
        display="initial"/>
      </div>
      <div className={styles.secondafter}>
        <h3>Secondafter</h3>
        <img src="public/assets/secondafter.jpg"/>
        
        <Iframe url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/614894913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          height="100px"
        id="myId"
        
        display="initial"/>
      </div>
    </AwesomeSlider>
  )
  return (
    <div className={styles.page}>
      <div className={styles.title}>
      <h1>Bio</h1>
      </div>
    
    <div className={styles.home}>
      <div className={styles.about}>
        <h1>...in the beginning...</h1>
        <p>I was born and raised in the Central Valley of California to an farming family. At an early age, I was instilled with the value of hard work. At at early age, I learned that a farmer's life is not 9-5, rather sun up to completion of tasks.  This is a work ethic that I carry to this day.  </p>
      </div>
    
      <div className={styles.music}>
        <h1>....music</h1>
        <div className={styles.description}>
        <p>Music has been a lifelong passion of mine.  I've been playing a musical instrument of some kind since i was 8 years old.  I've always been drawn the the creativity of sound.  I joined my first band in highschool and have been playing in one band or another ever since.  </p>
        </div>
        
     <div className={styles.slider}>{bandSlider}</div>
        
   </div>
   
   <h1>...art</h1>
   <div className={styles.art}>
     
     <p>I've always been an artist and a maker so when I was introduced to the art of glass blowing I was hooked!  I loved it so much I made it a career for 20 years.  Its the perfect combination of technique and vision.  </p>
   <Iframe url="https://www.youtube.com/embed/xQi3GUlW3K4"
    width="350px"
    height="470" 
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    allowFullScreen />
        </div>

</div>
</div>
  )
}
