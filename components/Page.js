import React, { Component } from 'react'
import Meta from './Meta'
import UserHeader from './UserHeader'
import Footer from './Footer'

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <UserHeader />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Page
