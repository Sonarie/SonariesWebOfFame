import React from 'react';


export default function Resume() {
    return(
        <section className='my-5'>
            <h1 id="resume">Resume</h1>
            <div>
            <a href={require("../../assets/docs/resume.pdf")} target="_blank" rel="noreferrer" className="resume">Open Here</a>
            </div>        
        </section>
    );
}