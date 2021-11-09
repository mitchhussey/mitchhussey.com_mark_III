import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Hello there"
          subTitle="Tech reviews, product photography, and lessons learned as a product manager"
        />
        {/* <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule> */}
        <Features />
        <BasicTextModule />
      </Layout>
    </>
  )
}

export default Index
