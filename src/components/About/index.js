import React from 'react';
import coverImage from "../../assets/cover/headshot.jpg";

export default function About() {
  return (
  <section className="my-5">
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    <div className="my-2">
        <p>
          I recently added to my web of skills by completing a full stack development 
          bootcamp through the University of Minnesota.  I'm always looking to continuously 
          grow and develop in my field of Training and Development where I work to 
          create engaging user friendly training content in many areas of studu. My creative platform 
          is the Adobe Creative Suite + Captivate. I will be able to merge coding with my 
          expertise in training, process improvement and design will be exciting adventure to 
          creating new content for users. This portfolio is my showcase to projects I have 
          developed or collaborated with.
        </p>
    </div>
  </section>
  );
}

