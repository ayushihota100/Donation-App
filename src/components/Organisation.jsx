import React from 'react';
import nanhikali from '../assets/img/nanhikali.jpg';
import careindia from '../assets/img/careindia.jpg';
import cry from '../assets/img/cry.jpg';
import helpageindia from '../assets/img/helpageindia.png';
import pratham from '../assets/img/pratham.png';
import goonj from '../assets/img/goonj.jpg';

const Organisation = () => {
  return (
    <div>
         <section className="page-section bg-light" id="Orgranisations">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase ">Orgranisations</h2>
                    <h3 className="section-subheading text-muted">Featured Organisations we have worked with!</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                       
                        <div className="Orgranisations-item">
                            <div className='orgimg1'></div>
                            
                            <div className="Orgranisations-caption">
                                <div className="Orgranisations-caption-heading">Nanhi Kali</div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="Orgranisations-item">
                        
                      <div className='orgimg1'></div>
                        <div className="Orgranisations-caption">
                            <div className="Orgranisations-caption-heading">Pratham</div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                 <div className="Orgranisations-item">
                 <div className='orgimg1'></div>    
                            
                            <div className="Orgranisations-caption">
                                <div className="Orgranisations-caption-heading">Goonj</div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                       <div className="Orgranisations-item">
                       <div className='orgimg1'></div>
                            <div className="Orgranisations-caption">
                                <div className="Orgranisations-caption-heading">Help-age India</div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    <div className="Orgranisations-item">
                            
                    <div className='orgimg1'></div>
                            
                            <div className="Orgranisations-caption">
                                <div className="Orgranisations-caption-heading">CRY</div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        


                        <div className="Orgranisations-item">
                        <div className='orgimg1'></div>
                            <div className="Orgranisations-caption">
                                <div className="Orgranisations-caption-heading">Care India</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Organisation