import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About page" />
    <section id="main">
      <div className="inner">
        <h1>THIS IS AN ABOUT PAGE</h1>
        <p>Welcome to about page</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </section>
  </Layout>
)

export default AboutPage
