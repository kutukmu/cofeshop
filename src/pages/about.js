import React from "react"
import Layout from "../components/layout"
import Info from "../components/info"
import { Link, graphql } from "gatsby"
import BackImage from "../components/backSection"
const about = ({ data }) => {
  return (
    <div>
      <Layout>
        <BackImage
          imgdata={data}
          title="Our Story"
          classname="about-background"
        />
        <Info />
      </Layout>
    </div>
  )
}

export default about
export const query = graphql`
  {
    file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
