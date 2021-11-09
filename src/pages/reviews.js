import * as React from "react"
import Layout from "../components/Layout"
import Features from "../components/Products/Products"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { StaticImage } from "gatsby-plugin-image"

const products = () => {
  return (
    <>
      <Seo title="Reviews" />
      <Layout>
        <SimpleBanner title="Product Reviews">
          <StaticImage
            className="banner__image"
            src="../images/good_vibes.jpeg"
            alt="Apple watch floating over iPhone"
          />
        </SimpleBanner>
        <Features />
      </Layout>
    </>
  )
}

export default products
