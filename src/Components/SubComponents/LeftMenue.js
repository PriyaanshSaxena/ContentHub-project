import React from 'react'
import './LeftMenue.css';

export default function LeftMenue() {
  return (
    <>

<div className='tags-card'>
<div className="container tags">
  <div className="row">
    <div className="col-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-tags tag-symbol" viewBox="0 0 16 16">
        <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
        <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
        </svg>
    </div>
    <div className="col-10">
       <h3>Tags</h3>
    </div>
  </div>
</div>
</div>


<div className='container text-below-tag'>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    </p>
</div>


<br/>

<div className='tags-card'>
<div className="container writers">
  <div className="row">
    <div className="col-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-vector-pen vector-pen" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
            <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
            </svg>
    </div>
    <div className="col-10">
       <h3>Top Writers</h3>
    </div>
  </div>
</div>
</div>

<div className='container text-below-tag'>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
</div>
  
 {/* writers for follow */}

  <div className="container">
  <div className="row">
    <div className="col-2">
      <img className="profilepic-small" src="./profile.jpg"/>
    </div>
    <div className="col-6">
      <div className="writer-heading">writer name</div>
      <div className="writer-description">type of the writer</div>
    </div>
    <div className="col-4 follow-button"> 
        <button className="button">Follow</button>
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-2">
      <img  className="profilepic-small" src="./profile.jpg"/>
    </div>
    <div className="col-6">
      <div className="writer-heading">writer name</div>
      <div className="writer-description">type of the writer</div>
    </div>
    <div className="col-4 follow-button"> 
        <button className="button">Follow</button>
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-2">
      <img  className="profilepic-small" src="./profile.jpg"/>
    </div>
    <div className="col-6">
      <div className="writer-heading">writer name</div>
      <div className="writer-description">type of the writer</div>
    </div>
    <div className="col-4 follow-button"> 
        <button className="button">Follow</button>
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-2">
      <img  className="profilepic-small" src="./profile.jpg"/>
    </div>
    <div className="col-6">
      <div className="writer-heading">writer name</div>
      <div className="writer-description">type of the writer</div>
    </div>
    <div className="col-4 follow-button"> 
        <button className="button">Follow</button>
    </div>
  </div>
</div>


    </>
  )
}

