import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BackImage from "../components/backSection"
import SEO from "../components/seo"
import Info from "../components/info"
import Menu from "../components/menu"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackImage
      imgdata={data.file.childImageSharp.fluid}
      title="Take A Little Break"
      classname="default-background"
    />

    <Info />
    <Menu items={data.allContentfulCoffeeitem} />
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

    allContentfulCoffeeitem {
      nodes {
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
        }
        price
        tittle
        description {
          description
        }
      }
    }
  }
`
