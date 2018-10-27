import React, { Component } from 'react'
import Meta from './Meta'
import UserHeader from './UserHeader'

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <UserHeader />
        {this.props.children}
      </div>
    )
  }
}

export default Page
