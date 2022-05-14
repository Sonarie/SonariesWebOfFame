import React from 'react';
import coverImage from "../../assets/images/headshot.jpg";

function About() {
  return (
  <section className="my-5">
    <h1 id="about">Who I Am</h1>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    <div className="my-2">
        <p>
          I recently completed a full stack development bootcamp and am eager to begin
          using and improving my new skills and developing new ones. I am looking to 
          grow into the field and merge with my expertise in training, process improvement 
          and design. My creative platform is the Adobe Creative Suite + Captivate, It's
          always an exciting adventure to create new content for users.
        </p>
    </div>
  </section>
  );
}

export default About;