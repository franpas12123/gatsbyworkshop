import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Pic01 from "../images/pic01.jpg"
import Pic02 from "../images/pic02.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<section id="banner">
			<div className="inner">
				<h1>
					Introspect:
					<span>A free + fully responsive<br />
						site template by TEMPLATED
          </span>
				</h1>
				<ul className="actions">
					<li><Link to="#" className="button alt">Get Started</Link></li>
				</ul>
			</div>
		</section>

		<section id="one">
			<div className="inner">
				<header>
					<h2>Magna Etiam Lorem</h2>
				</header>
				<p>
					Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
					sit amet mi ullamcorper vehicula. Integer adipiscin sem. Nullam quis
					massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis,
					faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer
					sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis
					mi in ante.
				</p>
				<ul className="actions">
					<li><Link to="#" className="button alt">Learn More</Link></li>
				</ul>
			</div>
		</section>

		<section id="two">
			<div className="inner">
				<article>
					<div className="content">
						<header>
							<h3>Pellentesque adipis</h3>
						</header>
						<div className="image fit">
							<img src={ Pic01 } alt="" />
						</div>
						<p>
							Cumsan mollis eros. Pellentesque a diam sit amet mi magna
							ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit
							amet lorem ipsum feugiat tempus.
						</p>
					</div>
				</article>
				<article className="alt">
					<div className="content">
						<header>
							<h3>Morbi interdum mol</h3>
						</header>
						<div className="image fit">
							<img src={ Pic02 } alt="" />
						</div>
						<p>
							Cumsan mollis eros. Pellentesque a diam sit amet mi magna
							ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit
							amet lorem ipsum feugiat tempus.
						</p>
					</div>
				</article>
			</div>
		</section>

		<section id="three">
			<div className="inner">
				<article>
					<div className="content">
						<span className="icon fa-laptop"></span>
						<header>
							<h3>Tempus Feugiat</h3>
						</header>
						<p>
							Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
							magna lorem ullamcorper laoreet, lectus arcu.
						</p>
						<ul className="actions">
							<li><Link to="#" className="button alt">Learn More</Link></li>
						</ul>
					</div>
				</article>
				<article>
					<div className="content">
						<span className="icon fa-diamond"></span>
						<header>
							<h3>Aliquam Nulla</h3>
						</header>
						<p>
							Ut convallis, sem sit amet interdum consectetuer, odio augue
							aliquam leo, nec dapibus tortor nibh sed.
						</p>
						<ul className="actions">
							<li><Link to="#" className="button alt">Learn More</Link></li>
						</ul>
					</div>
				</article>
				<article>
					<div className="content">
						<span className="icon fa-laptop"></span>
						<header>
							<h3>Sed Magna</h3>
						</header>
						<p>
							Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
							diam sit amet mi ullamcorper vehicula.
						</p>
						<ul className="actions">
							<li><Link to="#" className="button alt">Learn More</Link></li>
						</ul>
					</div>
				</article>
			</div>
		</section>
  </Layout>
)

export default IndexPage
