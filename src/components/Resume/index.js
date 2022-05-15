import React from 'react';


function Resume(){
    return(
        <section className='my-5'>
            <h1 id="resume">Resume</h1>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="sonjaliveoak" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/sonjaliveoak?trk=profile-badge">Sonja Watson</a></div>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            <div>
            <a href="../../assets/docs/resume.pdf" target="_blank" className="resume">Open Here</a>
            </div>        
        </section>
    );
}

export default Resume;