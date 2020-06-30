/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const getSiteMetadata = graphql`
{
  site {
    siteMetadata {
      title
      author
      createdAt
    }
  }
}`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Layout ({ children }) {
  return (
    <StaticQuery
      query={getSiteMetadata}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
            <footer>
              Built by{' '} 
              {data.site.siteMetadata.author} © {data.site.siteMetadata.createdAt}
            </footer>
          </div>
        </>
      )}
    />
  )
}
