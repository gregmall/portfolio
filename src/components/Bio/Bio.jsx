import React from 'react'
import Iframe from 'react-iframe'
import styles from './Bio.css';
export default function Bio() {
  return (
    <>
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
        <div>
        <p>Music has been a lifelong passion of mine.  I've been playing a musical instrument of some kind since i was 8 years old.  I've always been drawn the the creativity of sound.  I joined my first band in highschool and have been playing in one band or another ever since.  </p>
        <div className={styles.cede}>
        <h3>Cede the Clouds</h3>
        <img src="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.0-9/48368437_2218654741585377_2919862245498290176_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=sYsOgRmawK8AX-IETVk&_nc_ht=scontent.fhio2-2.fna&oh=681768f92c7ae30b85ebd6560dd7d8c7&oe=60271CC2" />
   <Iframe url="https://bandcamp.com/EmbeddedPlayer/album=2964969569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=2130197304/transparent=true/" 
   width="400px"
   height="120px"
   id="myId"
   
   display="initial"
   />
   </div>
   </div>
<div className={styles.pigs}>
   <h3>Feral Pigs</h3>
   <img src="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.0-9/430573_367092509968069_1524082485_n.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=rZVLShOFhJ0AX_74K9D&_nc_ht=scontent.fhio2-2.fna&oh=d98566eebfb146bef41628f56b63318e&oe=602515EE"/>
   <Iframe url="https://www.reverbnation.com/widget_code/html_widget/artist_2390217?widget_id=55&pwc[song_ids]=17216491&context_type=song&spoid=artist_2390217"
   width="400px"
   height="120px"
   id="myId"
   
   display="initial"/>
 </div>
 <div className={styles.secondafter}>
   <h3>Secondafter</h3>
   <img src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/5200_117486697215_581316_n.jpg?_nc_cat=111&ccb=2&_nc_sid=cdbe9c&_nc_ohc=UgyrHA6exJoAX-SRhrf&_nc_ht=scontent.fhio2-1.fna&oh=cbf812bcf68756e587a207de53fa6c2a&oe=6025103A"/>
   
   <Iframe url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/614894913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    height="100px"
   id="myId"
   
   display="initial"/>
 </div>
   </div>
   <div>
     <h1>...art</h1>
     <p>I've always been an artist and a maker so when I was introduced to the art of glass blowing I was hooked!  I loved it so much I made it a career for 20 years.  Its the perfect combination of technique and vision.  </p>
   <Iframe url="https://www.youtube.com/embed/xQi3GUlW3K4"
    width="350px"
    height="470" 
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    allowFullScreen />
        </div>

</div>
</>
  )
}

