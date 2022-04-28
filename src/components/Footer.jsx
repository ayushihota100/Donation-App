import React from 'react'


const Footer = () => {
  return (
    <div>
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start"> Smiley Org</div>
                   
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Email us at: smiley@gmail.com</a>
                        <a className="link-dark text-decoration-none" href="#!">Helpline: +9112223456 </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer