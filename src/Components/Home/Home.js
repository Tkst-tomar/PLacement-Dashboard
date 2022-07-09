import React from 'react'
import LoginComp from './Login Component/LoginComp'
import "./Home.css"

function Home() {
    return (
        <div>
            <div className="container py-5">
                <div className="row  justify-content-around py-5">
                    <div className="col-md-5 py-5">
                        <h1 className="text-primary pt-5">Where Talent
                            Meets Opportunity</h1>
                        <h3 className="lead text-grey py-3">
                            Chetu helps fresh graduates get their first jobs,
                            enables employers to recruit faster,
                            and helps colleges streamline campus placements
                        </h3>
                        <button className="btn btn-warning rounded-pill px-4">Get Started</button>
                    </div>
                    <div className="col-md-5 ImgBox">
                        <img className='bgImage' src="./Assets/bg.svg" alt="background" />
                        <img className='person1' src="./Assets/person1.png" alt="First Person" />
                        <img className='person2' src="./Assets/person2.svg" alt="Second Person" />
                        <img className='person3' src="./Assets/person3.svg" alt="Third Person" />
                    </div>
                    <LoginComp/>

                    
                </div>
            </div>
        </div>
    )
}

export default Home
