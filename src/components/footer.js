import { Link } from "gatsby"
import React from "react"

const Footer = () => (
   <section id="footer">
      <div className="inner">
         <header>
            <h2>Get in Touch</h2>
         </header>
         <form method="post" action="#">
            <div className="field half first">
               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
               <label htmlFor="email">Email</label>
               <input type="text" name="email" id="email" />
            </div>
            <div className="field">
               <label htmlFor="message">Message</label>
               <textarea name="message" id="message" rows="6"></textarea>
            </div>
            <ul className="actions">
               <li><input type="submit" value="Send Message" className="alt" /></li>
            </ul>
         </form>
         <div className="copyright">
            &copy; Untitled Design: <Link to="https://templated.co/">TEMPLATED</Link>.
            Images <Link to="https://unsplash.com/">Unsplash</Link>
         </div>
      </div>
   </section>
)

export default Footer