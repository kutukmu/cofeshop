import React from "react"
import { graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ imgdata, classname, title, children }) => {
  const imageData = imgdata.file.childImageSharp.fluid
  return (
    <BackgroundImage Tag="section" fluid={imageData} className={classname}>
      <h1 className="title text-white text-center text-uppercase display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "Default Title",
  classname: "default-background",
}

export default BackgroundSection
