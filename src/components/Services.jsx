import React from 'react'

const Services = () => {
  return (
    <div> <section className="page-section" id="services">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">What all you can donate?</h3>
        </div>
        <div className="row text-center">
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Money</h4>
                <p className="text-muted">Your little amount can mean the world to someone.</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-child fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Clothes</h4>
                <p className="text-muted">Your old clothes and assesories can be new found joy to someone!</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-cutlery fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Food</h4>
                <p className="text-muted">You can organise charity lunch and feed people.</p>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Services