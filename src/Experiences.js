import React from 'react'
import Internship from './Internship'

const Experiences = () => {
  return (
    <div>
        <h2 className='text-light ml-5  text-center' id='experience'>Experiences</h2>

        <div className="jumbotron jumbotron-fluid bg-dark" >

            <h3 className='text-light ml-5' >Internship Experiences</h3>
            <p className='font-weight-bold text-bg-info ml-5 mt-2'>I have Cracked 4 Interviews of different companies.I hope these Experiences will help you.</p>
                <div class="accordion ml-4 mt-4" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <img src="imgs/company/psl.jpg" width={'40px'} alt="psl" />   
                        Persistent Systems (Off-Campus) - Jan 2022
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <strong>On Jan 2022 , I cracked Interview of Persistent Systems Off Campus and I am currently joined as FTE in Persistent.</strong> 
                        <p>I had faced first interview of Persistent on campus but I had not been selected in the interview. Firstly they gave me a coding question to solve star pattern. I successfully solved that question. In the second coding question i had to code in C language so due to some error i took a lot of time and was rejected in that interview.</p>
                        <p>Then I got another opportunity. I applied for persistent on Jan 2022 off-campus. After clearing the assessment,I appeared in an interview and they asked basic programming fundamentals questions. They gave me 2 coding questions and I successfully cracked that questions. Then after some days, I got a Selection mail from Persistent Systems. </p>
                    </div>
                    </div>
                    </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <img src="imgs/company/wipro.jpg" width={'40px'} alt="psl" /> 
                    Wipro Limited (Off-campus) - Sep 2021 
                </button>
                </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
                <p>
                Wipro started hiring for the 2022 batch through Wipro Elite national talent hunt.
                 This hiring started in Sep 2021. When I clear the online assessment,
                  I started preparing for the interview. I had to wait for too long.</p>
                  <p>
                   The interview was conducted in Nov 2021. The interview was conducted on the superset platform.
                    They started asking about my subjects like which subject I'm good at. 
                    So they asked questions related to networking,DBMS and oops. 
                    After that, they asked some questions regarding presentation skills.
                     After all the satisfactory answers they started HR related questions. 
                     That's it interview was over.</p>
                 <p>I had to wait for too long for the LOI. I got LOI in Dec first week. This was my first job offer.
                </p>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <img src="imgs/company/hansen.jpg" width={'40px'} alt="psl" /> 
                Hansen Technologies (On-Campus) - Dec 2021
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
                <p>Hansen technology, I haven't heard that name before.
                    I got job offer from wipro but I was not satisfied with the package. So I applied for this company. 
                </p> 
                <p>
                In Hansen's interview, they asked questions related to my projects. They asked deeply about my project. After they asked about some core subjects. They also asked some scenario-based questions. The next day I called for HR interview. In the HR interview, they asked about my hobbies, passion, what I did during Covid lockdown, etc. 
                </p>
                <p>On the same day, I got an offer letter.</p>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <img src="imgs/company/hcl.jpg" width={'40px'} alt="psl" /> 
                HCL Technologies (Off-campus) - Jan 2022
            </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div class="accordion-body">
                <p>I applied for HCL off-campus drive just for the interview experience. 
                    During HCL drive I also applied for Persistent Systems. In HCL interview,
                    they asked questions related to programming languages like which programming language is best.
                    They asked about concepts of C, oops, data structure, and all.
                </p> 
                <p>After some days I got mail for HR interview.But I did'nd got the offer letter and I got offer from Persistent Systems
                    so I joined Persistent Systems.
                </p>
            </div>
            </div>
        </div>
        </div>
        <hr />
        <Internship></Internship>        
    </div>

    </div>
  )
}

export default Experiences