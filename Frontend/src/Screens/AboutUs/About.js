import React from 'react'
import './AboutUs.css'
import Navbar from './Navbar'


export default function About() {
    return (
        <div>
            <Navbar />
              <div className='main'> <h1 className='head'> About US  </h1>  </div>
            <div className='about'> 
                <div className='card'> 
                    <h2> About Codeeam  </h2>
                    <p> Codeeam is a youth team , it was founded to assist the students and who 
                        is interested in languages to learn it. so far in our website we have three
                        courses , English , Germany and Turkish
                    </p>
                </div>
            
            
                <div className='card'> 
                    <h2> Our mission </h2>
                    <p> 
                        - Providing high quality educational courses that exceed customers’ expectations.
                    </p>
                    <p> - Upgrading the corporate culture through mutual respect and  (continuous improvement).</p>
                </div>
            
            
                <div className='card'> 
                    <h2> Our vision </h2>
                    <p> We strive to lead the way in delivering the highest levels of outstanding service,
                        from educational courses , scientific lessons and seminars.We view our clients as they 
                        deserve the best quality and we strive to develpe that in the future.

                    </p>
            </div>
            <div className='card'> 
                    <h2> Our courses </h2>
                    <p> - English   - Germany  - Chinese - Turkish </p> <br></br>
                    <p> in future : programming , Music  </p>
                   
            </div>
            </div>
            {/* <Feed /> */}
        </div>
    )
}
