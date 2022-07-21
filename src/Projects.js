import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
        
        <h2 className='text-light ml-5  mt-5 text-center'>Projects</h2>
        <div className='row  center-block mt-5' >

            <div className='col-sm-6'>
            <div class="card border-dark mb-3 text-center col-sm-6" style={{width : "50%",margin:'0px auto'}}>
                <div class="card-header text-dark font-weight-bold">Minor</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">GYRO - Get Your Room Own</h5>
                    <h6 className='text-primary'>Technology : Java Servlets</h6>
                    <h6 className='text-success'>Team Size : 4 Members</h6>
                    <p class="card-text">
                    In this web application a user can post their hostel rooms and the other can search
                    it easily.Our website is basically for the Students who don't find Room easily and 
                    also for the renter who have their room for hostellers but there is no perfect 
                    platform where they can post it . So we provide them a website where 
                    both(room seekers and renter) can comfortably find and post easily.

                    </p>
                </div>
            </div>
            </div>
            <div className='col-sm-6'>
            <div class="card border-dark mb-3 text-center col-sm-6" style={{width : "50%",margin:'0px auto'}}>
                <div class="card-header  text-dark font-weight-bold">Major</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">Product Expiry Notifier</h5>
                    <h6 className='text-primary'>Technology : Django</h6>
                    <h6 className='text-success'>Team Size : 5 Members</h6>
                    <p class="card-text">This web application can track the products data updated by wholesalers including
                    their expiry dates. It can also store records of products that
                    shopkeepers can store. When the expiry date of any product will be near, it will
                    generate a notification. It will give notification to the shopkeeper
                    before one month of expiry of that product.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects