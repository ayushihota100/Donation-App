import React from 'react'

const Procedure = () => {
  return (
    <div><section className="page-section" id="about">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">How to help?</h2>
            <h3 className="section-subheading text-muted">Let us walk you through the easy steps!</h3>
        </div>
        <ul className="timeline">
            <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/1.jpg" alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>Step 1</h4>
                        <h4 className="subheading">Fill the donation form</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Go to the donate button and fill <br /> the form with some basic details.</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/2.jpg" alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>Step 2</h4>
                        <h4 className="subheading">Form of donation</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Choose the form of donation you want to make out of clothes,finance or food</p></div>
                </div>
            </li>
            <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/3.jpg" alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>Step 3</h4>
                        <h4 className="subheading">Contact</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Through the filled form we will provide you with the contact details of the organisations requiring donations</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/4.jpg" alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>Step 4</h4>
                        <h4 className="subheading">Celebrate</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Celebrate cause you provided for someones celebration!</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image">
                    <h4>
                        Spread
                        <br />
                        Joy
                        
                    </h4>
                </div>
            </li>
        </ul>
    </div>
</section></div>
  )
}

export default Procedure