import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BackImage from "../components/backSection"
import SEO from "../components/seo"
import Info from "../components/info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackImage
      imgdata={data}
      title="Take A Little Break"
      classname="default-background"
    />

    <Info />
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    file(relativePath: { eq: "back3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
