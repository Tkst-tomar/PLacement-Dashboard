import React from 'react'

function LoginComp() {
    return (
        <>
            <div className="container d-flex justify-content-center py-5">
                <div className="col-md-7 py-5">
                    <div className="row justify-content-between py-5">
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <h4 className='text-primary fw-bolder'>
                                Company
                            </h4>
                        </div>
                        <div className="col-md-9">
                            <h3 className="text-dark fw-bolder pb-2">End-to-end virtual campus hiring</h3>
                            <h4 className="lead text-secondary pb-2">Complete automation, right from - outreach to 24,000 campuses, engagement, assessments, virtual interviews to industry benchmarking and analytics.</h4>
                            <button className="btn btn-primary rounded-pill px-3">For Companies</button>
                        </div>
                    </div>
                    <div className="row justify-content-between py-5">
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <h4 className='text-primary fw-bolder'>
                                Universities
                            </h4>
                        </div>
                        <div className="col-md-9">
                            <h3 className="text-dark fw-bolder pb-2">Digitize & automate placements online</h3>
                            <h4 className="lead text-secondary pb-2">Streamline process, monitor data, reach out to more employers, and enable your placement cell online. <br />
                                <br />
                                All at 1/8th the time and effort.</h4>
                            <button className="btn btn-primary rounded-pill px-3">For Universities</button>
                        </div>
                    </div>
                    <div className="row justify-content-between py-5">
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <h4 className='text-primary fw-bolder'>
                                Students
                            </h4>
                        </div>
                        <div className="col-md-9">
                            <h3 className="text-dark fw-bolder pb-2">Learn, prepare & apply to jobs</h3>
                            <h4 className="lead text-secondary pb-2">Discover new opportunities, learn and practice on the go, prepare better for interviews</h4>
                            <button className="btn btn-primary rounded-pill px-3">For Students</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComp
