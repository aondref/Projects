import React from 'react'
import PostLayout from './postLayout'

function JourneySoFar({title}) {
  return (
    <PostLayout 
      title="Journey So Far"
      date="March 4th, 2022"
      author="Aondre"
      image='\images\photo-1518563259479-d003c05a6507-blogpost2-1.jpeg'
      images='\images\firstPost\photo_01_firstPost_500px.jpeg 500w, \images\firstPost\photo_01_firstPost_1000px.jpeg 1000w'
    >
        <p>Surreal, and maybe providence, is the best way I can describe my life right now. 
          If anyone told me that my life would drastically change for the better during a 
          global pandemic, I’d politely entertain the possibility while internally doubting 
          every word they said.
        </p>
        <p>In 2020 I decided to start a coding bootcamp, hosted by Per Scholas. I chose 
          Per Scholas after 3 people who didn’t know each other all told me about Per Scholas.
          Maybe it was great marketing or some other factor I haven’t considered but I took 
          this as a sign of my path to follow.
        </p>
        <p>I enrolled in PS’s software engineering course, and it was hard, challenging 
          and a serious character builder. I completed the course in March 2021 and started 
          my job search, with PS’s assistance.
        </p>
        <p>During the SWE course, my cohort was given several opportunities to apply to
          companies that partner with PS, Bank of America being 1 of them. After interviewing 
          with different dev teams at BofA, for their apprenticeship program, I was hired on, 
          in May, as an infrastructure engineer apprentice with 1 of the AIE (Application 
          Integration Engineering) teams.
        </p>
        <p>This is how we get to surreal/providence. In less than a year my life changed.
          I’m over the moon. I was able to move to New Jersey, to a place called Port Liberte. 
          The views from this place are amazing and I can't believe that I'm living here and this
          is my life.
        </p>
        <p>When I think of how much my life has changed, in such a short time, I can’t 
          help but kick myself for not starting earlier but I’m grateful to have reached this 
          stage and look forward to what comes next.
        </p>
        <p>Thanks for reading!</p>
    </PostLayout>
  )
}

export default JourneySoFar