import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='text-center'>Contact</h1>
        <div className='jumbotron' id='contact'>
        <div className='row text-center'>
        <div class="card" style={{width: "12rem",margin:'0px auto'}}>
        <a href='https://www.linkedin.com/in/srajan-soni-4b49601a4/' style={{textDecoration:'none'}} target={"_blank"} className="text-decoration-none">
        <img src="imgs/social/linkedin.png" class="card-img-top" alt="..." width={'80px'} />
        <div class="card-body">
            <p class="card-text text-decoration-none"><h2>LinkedIn</h2></p>
        </div>
        </a>
        </div>
        <div class="card" style={{width: "13rem",margin:'0px auto'}}>
        <a href='https://www.instagram.com/___srajan___00/' style={{textDecoration:'none'}} className='text-decoration-none' target={"_blank"}>
        <img src="imgs/social/instagram.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
            <p class="card-text"><h2>Instagram</h2></p>
        </div>
        </a>
        </div>
        <div class="card" style={{width: "12rem",margin:'0px auto'}}>
        <a href='mailto:srajansoni400@gmail.com' style={{textDecoration:'none'}} className='text-decoration-none' target={"_blank"}>
        <img src="imgs/social/gmail.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
            <p class="card-text mt-5"><h2>Gmail</h2></p>
        </div>
        </a>
        </div>
        </div>
        <h6 className='text-center text-light bg-dark w-50 mt-4 ' style={{margin:'0px auto'}}>Feel free to contact or connect with me</h6>
        </div>
    </div>
  )
}

export default Contact