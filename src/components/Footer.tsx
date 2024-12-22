import React from 'react'

const Footer:React.FC = () => {
  return (
    <footer>
    <div className="container footer">
      <div className="first-footer">
        <div className="footerDiv">
          <span>Phone</span>
          <b>+32 50 31 28 32</b>
        </div>
        <div className="footerDiv_adress">
          <span>Address</span>
          <b>491 Merlin Crest Suite 963</b>
        </div>
      </div>
      <div className="second-footer">
        <div className="footerDiv1">
          <p>Services</p>
          <ul>
            <li>Strategy Design</li>
            <li>Product Design</li>
            <li>Content Strategy</li>
            <li>Brand Strategy</li>
          </ul>
        </div>
        <div className="footerDiv1">
          <p>Help And Advice</p>
          <ul>
            <li>How it works</li>
            <li>Contact Support</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footerDiv1">
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="footerDiv2">
          <p>Get in Touch</p>
          <span>Feel free to get in touch with us vai email</span>
          <p>info.webovio@gmail.com</p>
          <div className="footicons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className="third-footer">
        <b><img src="/assets/images/favicon.svg" alt=""/> WEBOVIO</b>
        <p>© 2020@webovio. All Rights Reserved.</p>
      </div>
    </div>

  </footer>
  )
}

export default Footer