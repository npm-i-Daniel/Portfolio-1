import React, { useState } from 'react'
import './Projects.css'

function Projects() {
  //  Get the img object using its Id
  //  img = document.getElementsByClassName("p-img1");
  //  Function to increase image size
  //  function Big() {
  //      // Set image size to 1.5 times original
  //      img.style.transform = "scale(1.5)";
  //      // Animation effect
  //      img.style.transition = "transform 0.25s ease";
  //  }
  //  Function to reset image size
  //  function resetImg() {
  //      // Set image size to original
  //      img.style.transform = "scale(1)";
  //      img.style.transition = "transform 0.25s ease";

  // }


  return (
    <>
      <div className="projects">
        <h1 className='h12'>Projects</h1>
        <div className='projects__contents'>
          <div className='box'>
            <h3>Slack-Clone</h3>
            <img className='p-img1' src='./public/slack-features.png' />
            <a className='p-a' href="https://daniel14.neocities.org/Slack-clone/slack/slack">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate.
              <svg class="p-svg1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px">
                <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
              </svg>
            </a>
          </div>
          <div className='box'>
            <h3>Login Page</h3>
            <img className='p-img1' src='./public/login1.png' />
            <img className='p-img2' src='./public/login2.png' />
            <a className='p-a' href="https://daniel14.neocities.org/Login/login/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A login page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.
              <svg class="p-svg2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px">
                <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
              </svg>
            </a>
          </div>
          <div className='box'>
            <h3>Netflix-Clone</h3>
            <img className='p-img1' src='./public/netflix.png' />
            <a className='p-a' href=" ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device. Netflix is an American subscription video on-demand over-the-top streaming service.
              <svg class="p-svg3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px">
                <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}


export default Projects